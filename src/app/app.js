document.title = "Binnedieze 3D viewer";

window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));

viewer.setFOV(60);
viewer.setPointBudget(5*1000*1000);
viewer.setEDLEnabled(true);
viewer.setBackground("gradient");
viewer.setDescription(``);
viewer.loadSettingsFromURL();

viewer.loadGUI(() => {
    viewer.setLanguage('en');
});

Potree.loadPointCloud("greyhound://metis.geodan.nl:8081/resource/binnendieze/", "binnendieze", e => {
    // Add point cloud to viewer
    let pointcloud = e.pointcloud;
    viewer.scene.addPointCloud(pointcloud);

    // Point styling
    let material = pointcloud.material;
    material.pointColorType = Potree.PointColorType.RGB; // any Potree.PointColorType.XXXX 
    material.size = 3;
    material.pointSizeType = Potree.PointSizeType.FIXED;
    material.shape = Potree.PointShape.SQUARE;
    material.uniforms.rgbBrightness.value = 0.1;
    material.uniforms.rgbGamma.value = 0.8;
    // material.uniforms.intensityRange.value = [0, 65536];
    // material.uniforms.wIntensity.value = 0.25;

    viewer.fitToScreen();

    // Camera settings
    viewer.setMoveSpeed(1);
    viewer.setNavigationMode(Potree.FirstPersonControls);
    
    // Start location
    viewer.scene.view.position.x = 149270.085;
    viewer.scene.view.position.y = 410902.525;
    viewer.scene.view.position.z = 3.5;
    viewer.scene.view.yaw = 3.9784955411082996;
    viewer.scene.view._pitch = -0.15447265445489308;
});