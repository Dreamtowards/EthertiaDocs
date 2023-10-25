
# VR

## Mainstream VR Workflow (Unreal, Unity, Godot)

## How do we access VR

## OpenVR

OpenVR 是由 Valve Corp 于2015.4月发布的，用于连接各种VR设备的api接口和runtime运行时。

由于其开放性和创建者的支持，OpenVR 受到市场上几乎所有主要高端头显的支持，包括 HTC Vive、Oculus Rift..

- [OpenVR SDK](https://github.com/ValveSoftware/openvr)
- [OpenVR Sample by Valve](https://github.com/ValveSoftware/openvr/blob/master/samples/hellovr_opengl/hellovr_opengl_main.cpp)
- [OpenVR Sample by Matias Nassi, 2018](https://github.com/matinas/openvrsimplexamples/blob/master/openvrsimplexamples/src/main.cpp)
- [OpenVR Tutorial by Matias Nassi, 2018](https://skarredghost.com/2018/03/15/introduction-to-openvr-101-series-what-is-openvr-and-how-to-get-started-with-its-apis/)
- [OpenVR Wikipedia](https://en.wikipedia.org/wiki/OpenVR)

Usage Fake Samples:

```cpp
#include <openvr.h>

int main()
{
    // Init
    if (!vr::VR_IsHmdPresent() || !vr::VR_IsRuntimeInstalled()))
        ET_ERROR();

    vr::EVRInitError err;
    m_pHMD = vr::VR_Init(&err, vr::EVRApplicationType::VRApplication_Scene);
    if (err)
        ET_ERROR("Failed to init OpenVR: {}", vr::VR_GetVRInitErrorAsEnglishDescription(err));

	m_strDriver = GetTrackedDeviceString( vr::k_unTrackedDeviceIndex_Hmd, vr::Prop_TrackingSystemName_String );
	m_strDisplay = GetTrackedDeviceString( vr::k_unTrackedDeviceIndex_Hmd, vr::Prop_SerialNumber_String );

	if ( !vr::VRCompositor() )
	{
		printf( "Compositor initialization failed. See log file for details\n" );
		return false;
	}

    // MainLoop
    while (g_Running)
    {
        // Process OpenVR events
        vr::VREvent_t event;
        while( m_pHMD->PollNextEvent( &event, sizeof( event ) ) )
        {
            ProcessVREvent( event );
        }
        
        // Obtain tracking device poses
        m_pHMD->GetDeviceToAbsoluteTrackingPose(vr::ETrackingUniverseOrigin::TrackingUniverseStanding,0,tracked_device_pose,vr::k_unMaxTrackedDeviceCount);

        // Check whether the tracked device is a controller. If so, set text color based on the trigger button state
		//vr::VRControllerState_t controller_state;
		//if (vr_context->GetControllerState(nDevice,&controller_state,sizeof(controller_state)))
		//	((vr::ButtonMaskFromId(vr::EVRButtonId::k_EButton_Axis1) & controller_state.ulButtonPressed) == 0) ? color = green : color = blue;

        if (vrSystem->ShouldQuit()) {
                    break;
        }
    }

    // Shutdown
    vr::VR_Shutdown();
}

```

OpenVR 很成熟，不过可能有些过时了。



## OpenXR

OpenXR 是由 Khronos 维护的VR AR开放标准，于2017GDC宣布，于2019发布1.0标准。