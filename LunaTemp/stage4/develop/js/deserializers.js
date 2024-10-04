var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSpring' )
  var i683 = data
  i682.spring = i683[0]
  i682.damper = i683[1]
  i682.targetPosition = i683[2]
  return i682
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointMotor' )
  var i685 = data
  i684.m_TargetVelocity = i685[0]
  i684.m_Force = i685[1]
  i684.m_FreeSpin = i685[2]
  return i684
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointLimits' )
  var i687 = data
  i686.m_Min = i687[0]
  i686.m_Max = i687[1]
  i686.m_Bounciness = i687[2]
  i686.m_BounceMinVelocity = i687[3]
  i686.m_ContactDistance = i687[4]
  i686.minBounce = i687[5]
  i686.maxBounce = i687[6]
  return i686
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointDrive' )
  var i689 = data
  i688.m_PositionSpring = i689[0]
  i688.m_PositionDamper = i689[1]
  i688.m_MaximumForce = i689[2]
  i688.m_UseAcceleration = i689[3]
  return i688
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i691 = data
  i690.m_Spring = i691[0]
  i690.m_Damper = i691[1]
  return i690
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i693 = data
  i692.m_Limit = i693[0]
  i692.m_Bounciness = i693[1]
  i692.m_ContactDistance = i693[2]
  return i692
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i695 = data
  i694.m_ExtremumSlip = i695[0]
  i694.m_ExtremumValue = i695[1]
  i694.m_AsymptoteSlip = i695[2]
  i694.m_AsymptoteValue = i695[3]
  i694.m_Stiffness = i695[4]
  return i694
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i697 = data
  i696.m_LowerAngle = i697[0]
  i696.m_UpperAngle = i697[1]
  return i696
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i699 = data
  i698.m_MotorSpeed = i699[0]
  i698.m_MaximumMotorTorque = i699[1]
  return i698
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i701 = data
  i700.m_DampingRatio = i701[0]
  i700.m_Frequency = i701[1]
  i700.m_Angle = i701[2]
  return i700
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i703 = data
  i702.m_LowerTranslation = i703[0]
  i702.m_UpperTranslation = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i705 = data
  i704.name = i705[0]
  i704.width = i705[1]
  i704.height = i705[2]
  i704.mipmapCount = i705[3]
  i704.anisoLevel = i705[4]
  i704.filterMode = i705[5]
  i704.hdr = !!i705[6]
  i704.format = i705[7]
  i704.wrapMode = i705[8]
  i704.alphaIsTransparency = !!i705[9]
  i704.alphaSource = i705[10]
  i704.graphicsFormat = i705[11]
  i704.sRGBTexture = !!i705[12]
  i704.desiredColorSpace = i705[13]
  i704.wrapU = i705[14]
  i704.wrapV = i705[15]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i706 = root || new pc.UnityMaterial()
  var i707 = data
  i706.name = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'shader')
  i706.renderQueue = i707[3]
  i706.enableInstancing = !!i707[4]
  var i709 = i707[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i709[i + 0]) );
  }
  i706.floatParameters = i708
  var i711 = i707[6]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i711[i + 0]) );
  }
  i706.colorParameters = i710
  var i713 = i707[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i713[i + 0]) );
  }
  i706.vectorParameters = i712
  var i715 = i707[8]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i715[i + 0]) );
  }
  i706.textureParameters = i714
  var i717 = i707[9]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i717[i + 0]) );
  }
  i706.materialFlags = i716
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = new pc.Color(i725[1], i725[2], i725[3], i725[4])
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i729 = data
  i728.name = i729[0]
  i728.value = new pc.Vec4( i729[1], i729[2], i729[3], i729[4] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i733 = data
  i732.name = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'value')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i737 = data
  i736.name = i737[0]
  i736.enabled = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i739 = data
  i738.position = new pc.Vec3( i739[0], i739[1], i739[2] )
  i738.scale = new pc.Vec3( i739[3], i739[4], i739[5] )
  i738.rotation = new pc.Quat(i739[6], i739[7], i739[8], i739[9])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'clip')
  request.r(i741[2], i741[3], 0, i740, 'outputAudioMixerGroup')
  i740.playOnAwake = !!i741[4]
  i740.loop = !!i741[5]
  i740.time = i741[6]
  i740.volume = i741[7]
  i740.pitch = i741[8]
  i740.enabled = !!i741[9]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i743 = data
  i742.name = i743[0]
  i742.tagId = i743[1]
  i742.enabled = !!i743[2]
  i742.isStatic = !!i743[3]
  i742.layer = i743[4]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i745 = data
  i744.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i745[0], i744.main)
  i744.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i745[1], i744.colorBySpeed)
  i744.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i745[2], i744.colorOverLifetime)
  i744.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i745[3], i744.emission)
  i744.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i745[4], i744.rotationBySpeed)
  i744.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i745[5], i744.rotationOverLifetime)
  i744.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i745[6], i744.shape)
  i744.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i745[7], i744.sizeBySpeed)
  i744.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i745[8], i744.sizeOverLifetime)
  i744.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i745[9], i744.textureSheetAnimation)
  i744.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i745[10], i744.velocityOverLifetime)
  i744.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i745[11], i744.noise)
  i744.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i745[12], i744.inheritVelocity)
  i744.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i745[13], i744.forceOverLifetime)
  i744.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i745[14], i744.limitVelocityOverLifetime)
  i744.useAutoRandomSeed = !!i745[15]
  i744.randomSeed = i745[16]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemMain()
  var i747 = data
  i746.duration = i747[0]
  i746.loop = !!i747[1]
  i746.prewarm = !!i747[2]
  i746.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.startDelay)
  i746.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[4], i746.startLifetime)
  i746.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[5], i746.startSpeed)
  i746.startSize3D = !!i747[6]
  i746.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[7], i746.startSizeX)
  i746.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[8], i746.startSizeY)
  i746.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[9], i746.startSizeZ)
  i746.startRotation3D = !!i747[10]
  i746.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[11], i746.startRotationX)
  i746.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[12], i746.startRotationY)
  i746.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[13], i746.startRotationZ)
  i746.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i747[14], i746.startColor)
  i746.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[15], i746.gravityModifier)
  i746.simulationSpace = i747[16]
  request.r(i747[17], i747[18], 0, i746, 'customSimulationSpace')
  i746.simulationSpeed = i747[19]
  i746.useUnscaledTime = !!i747[20]
  i746.scalingMode = i747[21]
  i746.playOnAwake = !!i747[22]
  i746.maxParticles = i747[23]
  i746.emitterVelocityMode = i747[24]
  i746.stopAction = i747[25]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i748 = root || new pc.MinMaxCurve()
  var i749 = data
  i748.mode = i749[0]
  i748.curveMin = new pc.AnimationCurve( { keys_flow: i749[1] } )
  i748.curveMax = new pc.AnimationCurve( { keys_flow: i749[2] } )
  i748.curveMultiplier = i749[3]
  i748.constantMin = i749[4]
  i748.constantMax = i749[5]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i750 = root || new pc.MinMaxGradient()
  var i751 = data
  i750.mode = i751[0]
  i750.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i751[1], i750.gradientMin)
  i750.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i751[2], i750.gradientMax)
  i750.colorMin = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.colorMax = new pc.Color(i751[7], i751[8], i751[9], i751[10])
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i753 = data
  i752.mode = i753[0]
  var i755 = i753[1]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i755[i + 0]) );
  }
  i752.colorKeys = i754
  var i757 = i753[2]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i757[i + 0]) );
  }
  i752.alphaKeys = i756
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemColorBySpeed()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i759[1], i758.color)
  i758.range = new pc.Vec2( i759[2], i759[3] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i763 = data
  i762.color = new pc.Color(i763[0], i763[1], i763[2], i763[3])
  i762.time = i763[4]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i767 = data
  i766.alpha = i767[0]
  i766.time = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemColorOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[1], i768.color)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemEmitter()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.rateOverTime)
  i770.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.rateOverDistance)
  var i773 = i771[3]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i773[i + 0]) );
  }
  i770.bursts = i772
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemBurst()
  var i777 = data
  i776.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[0], i776.count)
  i776.cycleCount = i777[1]
  i776.minCount = i777[2]
  i776.maxCount = i777[3]
  i776.repeatInterval = i777[4]
  i776.time = i777[5]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemRotationBySpeed()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.separateAxes = !!i779[4]
  i778.range = new pc.Vec2( i779[5], i779[6] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemRotationOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.separateAxes = !!i781[4]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemShape()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.shapeType = i783[1]
  i782.randomDirectionAmount = i783[2]
  i782.sphericalDirectionAmount = i783[3]
  i782.randomPositionAmount = i783[4]
  i782.alignToDirection = !!i783[5]
  i782.radius = i783[6]
  i782.radiusMode = i783[7]
  i782.radiusSpread = i783[8]
  i782.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[9], i782.radiusSpeed)
  i782.radiusThickness = i783[10]
  i782.angle = i783[11]
  i782.length = i783[12]
  i782.boxThickness = new pc.Vec3( i783[13], i783[14], i783[15] )
  i782.meshShapeType = i783[16]
  request.r(i783[17], i783[18], 0, i782, 'mesh')
  request.r(i783[19], i783[20], 0, i782, 'meshRenderer')
  request.r(i783[21], i783[22], 0, i782, 'skinnedMeshRenderer')
  i782.useMeshMaterialIndex = !!i783[23]
  i782.meshMaterialIndex = i783[24]
  i782.useMeshColors = !!i783[25]
  i782.normalOffset = i783[26]
  i782.arc = i783[27]
  i782.arcMode = i783[28]
  i782.arcSpread = i783[29]
  i782.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[30], i782.arcSpeed)
  i782.donutRadius = i783[31]
  i782.position = new pc.Vec3( i783[32], i783[33], i783[34] )
  i782.rotation = new pc.Vec3( i783[35], i783[36], i783[37] )
  i782.scale = new pc.Vec3( i783[38], i783[39], i783[40] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemSizeBySpeed()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.separateAxes = !!i785[4]
  i784.range = new pc.Vec2( i785[5], i785[6] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemSizeOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.separateAxes = !!i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.mode = i789[1]
  i788.animation = i789[2]
  i788.numTilesX = i789[3]
  i788.numTilesY = i789[4]
  i788.useRandomRow = !!i789[5]
  i788.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[6], i788.frameOverTime)
  i788.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[7], i788.startFrame)
  i788.cycleCount = i789[8]
  i788.rowIndex = i789[9]
  i788.flipU = i789[10]
  i788.flipV = i789[11]
  i788.spriteCount = i789[12]
  var i791 = i789[13]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.sprites = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[4], i794.radial)
  i794.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[5], i794.speedModifier)
  i794.space = i795[6]
  i794.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[7], i794.orbitalX)
  i794.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[8], i794.orbitalY)
  i794.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.orbitalZ)
  i794.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[10], i794.orbitalOffsetX)
  i794.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[11], i794.orbitalOffsetY)
  i794.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[12], i794.orbitalOffsetZ)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemNoise()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.separateAxes = !!i797[1]
  i796.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.strengthX)
  i796.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.strengthY)
  i796.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[4], i796.strengthZ)
  i796.frequency = i797[5]
  i796.damping = !!i797[6]
  i796.octaveCount = i797[7]
  i796.octaveMultiplier = i797[8]
  i796.octaveScale = i797[9]
  i796.quality = i797[10]
  i796.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[11], i796.scrollSpeed)
  i796.scrollSpeedMultiplier = i797[12]
  i796.remapEnabled = !!i797[13]
  i796.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[14], i796.remapX)
  i796.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[15], i796.remapY)
  i796.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[16], i796.remapZ)
  i796.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[17], i796.positionAmount)
  i796.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[18], i796.rotationAmount)
  i796.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[19], i796.sizeAmount)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemInheritVelocity()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.mode = i799[1]
  i798.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.curve)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemForceOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.space = i801[4]
  i800.randomized = !!i801[5]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.limit)
  i802.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.limitX)
  i802.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.limitY)
  i802.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.limitZ)
  i802.dampen = i803[5]
  i802.separateAxes = !!i803[6]
  i802.space = i803[7]
  i802.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[8], i802.drag)
  i802.multiplyDragByParticleSize = !!i803[9]
  i802.multiplyDragByParticleVelocity = !!i803[10]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i805 = data
  i804.enabled = !!i805[0]
  request.r(i805[1], i805[2], 0, i804, 'sharedMaterial')
  var i807 = i805[3]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sharedMaterials = i806
  i804.receiveShadows = !!i805[4]
  i804.shadowCastingMode = i805[5]
  i804.sortingLayerID = i805[6]
  i804.sortingOrder = i805[7]
  i804.lightmapIndex = i805[8]
  i804.lightmapSceneIndex = i805[9]
  i804.lightmapScaleOffset = new pc.Vec4( i805[10], i805[11], i805[12], i805[13] )
  i804.lightProbeUsage = i805[14]
  i804.reflectionProbeUsage = i805[15]
  request.r(i805[16], i805[17], 0, i804, 'mesh')
  i804.meshCount = i805[18]
  i804.activeVertexStreamsCount = i805[19]
  i804.alignment = i805[20]
  i804.renderMode = i805[21]
  i804.sortMode = i805[22]
  i804.lengthScale = i805[23]
  i804.velocityScale = i805[24]
  i804.cameraVelocityScale = i805[25]
  i804.normalDirection = i805[26]
  i804.sortingFudge = i805[27]
  i804.minParticleSize = i805[28]
  i804.maxParticleSize = i805[29]
  i804.pivot = new pc.Vec3( i805[30], i805[31], i805[32] )
  request.r(i805[33], i805[34], 0, i804, 'trailMaterial')
  return i804
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i810 = root || request.c( 'AutoDestroy' )
  var i811 = data
  i810.delay = i811[0]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i813 = data
  i812.name = i813[0]
  i812.halfPrecision = !!i813[1]
  i812.useUInt32IndexFormat = !!i813[2]
  i812.vertexCount = i813[3]
  i812.aabb = i813[4]
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( !!i815[i + 0] );
  }
  i812.streams = i814
  i812.vertices = i813[6]
  var i817 = i813[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i817[i + 0]) );
  }
  i812.subMeshes = i816
  var i819 = i813[8]
  var i818 = []
  for(var i = 0; i < i819.length; i += 16) {
    i818.push( new pc.Mat4().setData(i819[i + 0], i819[i + 1], i819[i + 2], i819[i + 3],  i819[i + 4], i819[i + 5], i819[i + 6], i819[i + 7],  i819[i + 8], i819[i + 9], i819[i + 10], i819[i + 11],  i819[i + 12], i819[i + 13], i819[i + 14], i819[i + 15]) );
  }
  i812.bindposes = i818
  var i821 = i813[9]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i821[i + 0]) );
  }
  i812.blendShapes = i820
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i827 = data
  i826.triangles = i827[0]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i833 = data
  i832.name = i833[0]
  var i835 = i833[1]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i835[i + 0]) );
  }
  i832.frames = i834
  return i832
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i836 = root || request.c( 'ObjectPool' )
  var i837 = data
  i836.startupPoolMode = i837[0]
  var i839 = i837[1]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('ObjectPool+StartupPool', i839[i + 0]) );
  }
  i836.startupPools = i838
  return i836
}

Deserializers["ObjectPool+StartupPool"] = function (request, data, root) {
  var i842 = root || request.c( 'ObjectPool+StartupPool' )
  var i843 = data
  i842.size = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'prefab')
  return i842
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i844 = root || request.c( 'AudioManager' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'win')
  request.r(i845[2], i845[3], 0, i844, 'contifie')
  request.r(i845[4], i845[5], 0, i844, 'broken')
  request.r(i845[6], i845[7], 0, i844, 'winui')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i847 = data
  i846.enabled = !!i847[0]
  request.r(i847[1], i847[2], 0, i846, 'sharedMaterial')
  var i849 = i847[3]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.sharedMaterials = i848
  i846.receiveShadows = !!i847[4]
  i846.shadowCastingMode = i847[5]
  i846.sortingLayerID = i847[6]
  i846.sortingOrder = i847[7]
  i846.lightmapIndex = i847[8]
  i846.lightmapSceneIndex = i847[9]
  i846.lightmapScaleOffset = new pc.Vec4( i847[10], i847[11], i847[12], i847[13] )
  i846.lightProbeUsage = i847[14]
  i846.reflectionProbeUsage = i847[15]
  i846.color = new pc.Color(i847[16], i847[17], i847[18], i847[19])
  request.r(i847[20], i847[21], 0, i846, 'sprite')
  i846.flipX = !!i847[22]
  i846.flipY = !!i847[23]
  i846.drawMode = i847[24]
  i846.size = new pc.Vec2( i847[25], i847[26] )
  i846.tileMode = i847[27]
  i846.adaptiveModeThreshold = i847[28]
  i846.maskInteraction = i847[29]
  i846.spriteSortPoint = i847[30]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i851 = data
  i850.radius = i851[0]
  i850.enabled = !!i851[1]
  i850.isTrigger = !!i851[2]
  i850.usedByEffector = !!i851[3]
  i850.density = i851[4]
  i850.offset = new pc.Vec2( i851[5], i851[6] )
  request.r(i851[7], i851[8], 0, i850, 'material')
  return i850
}

Deserializers["Saw"] = function (request, data, root) {
  var i852 = root || request.c( 'Saw' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'visualTrans')
  request.r(i853[2], i853[3], 0, i852, 'graphic')
  request.r(i853[4], i853[5], 0, i852, 'animation')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'sharedMesh')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'additionalVertexStreams')
  i856.enabled = !!i857[2]
  request.r(i857[3], i857[4], 0, i856, 'sharedMaterial')
  var i859 = i857[5]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[6]
  i856.shadowCastingMode = i857[7]
  i856.sortingLayerID = i857[8]
  i856.sortingOrder = i857[9]
  i856.lightmapIndex = i857[10]
  i856.lightmapSceneIndex = i857[11]
  i856.lightmapScaleOffset = new pc.Vec4( i857[12], i857[13], i857[14], i857[15] )
  i856.lightProbeUsage = i857[16]
  i856.reflectionProbeUsage = i857[17]
  return i856
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i860 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i861 = data
  i860.loop = !!i861[0]
  i860.timeScale = i861[1]
  request.r(i861[2], i861[3], 0, i860, 'skeletonDataAsset')
  i860.initialSkinName = i861[4]
  i860.fixPrefabOverrideViaMeshFilter = i861[5]
  i860.initialFlipX = !!i861[6]
  i860.initialFlipY = !!i861[7]
  i860.updateWhenInvisible = i861[8]
  i860.zSpacing = i861[9]
  i860.useClipping = !!i861[10]
  i860.immutableTriangles = !!i861[11]
  i860.pmaVertexColors = !!i861[12]
  i860.clearStateOnDisable = !!i861[13]
  i860.tintBlack = !!i861[14]
  i860.singleSubmesh = !!i861[15]
  i860.fixDrawOrder = !!i861[16]
  i860.addNormals = !!i861[17]
  i860.calculateTangents = !!i861[18]
  i860.maskInteraction = i861[19]
  i860.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i861[20], i860.maskMaterials)
  i860.disableRenderingOnOverride = !!i861[21]
  i860.updateTiming = i861[22]
  i860.unscaledTime = !!i861[23]
  i860._animationName = i861[24]
  var i863 = i861[25]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( i863[i + 0] );
  }
  i860.separatorSlotNames = i862
  i860.physicsPositionInheritanceFactor = new pc.Vec2( i861[26], i861[27] )
  i860.physicsRotationInheritanceFactor = i861[28]
  request.r(i861[29], i861[30], 0, i860, 'physicsMovementRelativeTo')
  return i860
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i864 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.materialsMaskDisabled = i866
  var i869 = i865[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i864.materialsInsideMask = i868
  var i871 = i865[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i864.materialsOutsideMask = i870
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i875 = data
  i874.name = i875[0]
  i874.atlasId = i875[1]
  i874.mipmapCount = i875[2]
  i874.hdr = !!i875[3]
  i874.size = i875[4]
  i874.anisoLevel = i875[5]
  i874.filterMode = i875[6]
  var i877 = i875[7]
  var i876 = []
  for(var i = 0; i < i877.length; i += 4) {
    i876.push( UnityEngine.Rect.MinMaxRect(i877[i + 0], i877[i + 1], i877[i + 2], i877[i + 3]) );
  }
  i874.rects = i876
  i874.wrapU = i875[8]
  i874.wrapV = i875[9]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i881 = data
  i880.name = i881[0]
  i880.index = i881[1]
  i880.startup = !!i881[2]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i883 = data
  i882.enabled = !!i883[0]
  i882.aspect = i883[1]
  i882.orthographic = !!i883[2]
  i882.orthographicSize = i883[3]
  i882.backgroundColor = new pc.Color(i883[4], i883[5], i883[6], i883[7])
  i882.nearClipPlane = i883[8]
  i882.farClipPlane = i883[9]
  i882.fieldOfView = i883[10]
  i882.depth = i883[11]
  i882.clearFlags = i883[12]
  i882.cullingMask = i883[13]
  i882.rect = i883[14]
  request.r(i883[15], i883[16], 0, i882, 'targetTexture')
  i882.usePhysicalProperties = !!i883[17]
  i882.focalLength = i883[18]
  i882.sensorSize = new pc.Vec2( i883[19], i883[20] )
  i882.lensShift = new pc.Vec2( i883[21], i883[22] )
  i882.gateFit = i883[23]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i885 = data
  i884.enabled = !!i885[0]
  i884.type = i885[1]
  i884.color = new pc.Color(i885[2], i885[3], i885[4], i885[5])
  i884.cullingMask = i885[6]
  i884.intensity = i885[7]
  i884.range = i885[8]
  i884.spotAngle = i885[9]
  i884.shadows = i885[10]
  i884.shadowNormalBias = i885[11]
  i884.shadowBias = i885[12]
  i884.shadowStrength = i885[13]
  i884.shadowResolution = i885[14]
  i884.lightmapBakeType = i885[15]
  i884.renderMode = i885[16]
  request.r(i885[17], i885[18], 0, i884, 'cookie')
  i884.cookieSize = i885[19]
  return i884
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_FirstSelected')
  i886.m_sendNavigationEvents = !!i887[2]
  i886.m_DragThreshold = i887[3]
  return i886
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i889 = data
  i888.m_HorizontalAxis = i889[0]
  i888.m_VerticalAxis = i889[1]
  i888.m_SubmitButton = i889[2]
  i888.m_CancelButton = i889[3]
  i888.m_InputActionsPerSecond = i889[4]
  i888.m_RepeatDelay = i889[5]
  i888.m_ForceModuleActive = !!i889[6]
  i888.m_SendPointerHoverToParent = !!i889[7]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i891 = data
  i890.pivot = new pc.Vec2( i891[0], i891[1] )
  i890.anchorMin = new pc.Vec2( i891[2], i891[3] )
  i890.anchorMax = new pc.Vec2( i891[4], i891[5] )
  i890.sizeDelta = new pc.Vec2( i891[6], i891[7] )
  i890.anchoredPosition3D = new pc.Vec3( i891[8], i891[9], i891[10] )
  i890.rotation = new pc.Quat(i891[11], i891[12], i891[13], i891[14])
  i890.scale = new pc.Vec3( i891[15], i891[16], i891[17] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i893 = data
  i892.enabled = !!i893[0]
  i892.planeDistance = i893[1]
  i892.referencePixelsPerUnit = i893[2]
  i892.isFallbackOverlay = !!i893[3]
  i892.renderMode = i893[4]
  i892.renderOrder = i893[5]
  i892.sortingLayerName = i893[6]
  i892.sortingOrder = i893[7]
  i892.scaleFactor = i893[8]
  request.r(i893[9], i893[10], 0, i892, 'worldCamera')
  i892.overrideSorting = !!i893[11]
  i892.pixelPerfect = !!i893[12]
  i892.targetDisplay = i893[13]
  i892.overridePixelPerfect = !!i893[14]
  return i892
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i895 = data
  i894.m_UiScaleMode = i895[0]
  i894.m_ReferencePixelsPerUnit = i895[1]
  i894.m_ScaleFactor = i895[2]
  i894.m_ReferenceResolution = new pc.Vec2( i895[3], i895[4] )
  i894.m_ScreenMatchMode = i895[5]
  i894.m_MatchWidthOrHeight = i895[6]
  i894.m_PhysicalUnit = i895[7]
  i894.m_FallbackScreenDPI = i895[8]
  i894.m_DefaultSpriteDPI = i895[9]
  i894.m_DynamicPixelsPerUnit = i895[10]
  i894.m_PresetInfoIsWorld = !!i895[11]
  return i894
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i897 = data
  i896.m_IgnoreReversedGraphics = !!i897[0]
  i896.m_BlockingObjects = i897[1]
  i896.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i897[2] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i899 = data
  i898.cullTransparentMesh = !!i899[0]
  return i898
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.Image' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Sprite')
  i900.m_Type = i901[2]
  i900.m_PreserveAspect = !!i901[3]
  i900.m_FillCenter = !!i901[4]
  i900.m_FillMethod = i901[5]
  i900.m_FillAmount = i901[6]
  i900.m_FillClockwise = !!i901[7]
  i900.m_FillOrigin = i901[8]
  i900.m_UseSpriteMesh = !!i901[9]
  i900.m_PixelsPerUnitMultiplier = i901[10]
  request.r(i901[11], i901[12], 0, i900, 'm_Material')
  i900.m_Maskable = !!i901[13]
  i900.m_Color = new pc.Color(i901[14], i901[15], i901[16], i901[17])
  i900.m_RaycastTarget = !!i901[18]
  i900.m_RaycastPadding = new pc.Vec4( i901[19], i901[20], i901[21], i901[22] )
  return i900
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.Button' )
  var i903 = data
  i902.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i903[0], i902.m_OnClick)
  i902.m_Navigation = request.d('UnityEngine.UI.Navigation', i903[1], i902.m_Navigation)
  i902.m_Transition = i903[2]
  i902.m_Colors = request.d('UnityEngine.UI.ColorBlock', i903[3], i902.m_Colors)
  i902.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i903[4], i902.m_SpriteState)
  i902.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i903[5], i902.m_AnimationTriggers)
  i902.m_Interactable = !!i903[6]
  request.r(i903[7], i903[8], 0, i902, 'm_TargetGraphic')
  return i902
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i905 = data
  i904.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i905[0], i904.m_PersistentCalls)
  return i904
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i907 = data
  var i909 = i907[0]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('UnityEngine.Events.PersistentCall', i909[i + 0]));
  }
  i906.m_Calls = i908
  return i906
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'm_Target')
  i912.m_TargetAssemblyTypeName = i913[2]
  i912.m_MethodName = i913[3]
  i912.m_Mode = i913[4]
  i912.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i913[5], i912.m_Arguments)
  i912.m_CallState = i913[6]
  return i912
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_ObjectArgument')
  i914.m_ObjectArgumentAssemblyTypeName = i915[2]
  i914.m_IntArgument = i915[3]
  i914.m_FloatArgument = i915[4]
  i914.m_StringArgument = i915[5]
  i914.m_BoolArgument = !!i915[6]
  return i914
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i917 = data
  i916.m_Mode = i917[0]
  i916.m_WrapAround = !!i917[1]
  request.r(i917[2], i917[3], 0, i916, 'm_SelectOnUp')
  request.r(i917[4], i917[5], 0, i916, 'm_SelectOnDown')
  request.r(i917[6], i917[7], 0, i916, 'm_SelectOnLeft')
  request.r(i917[8], i917[9], 0, i916, 'm_SelectOnRight')
  return i916
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i919 = data
  i918.m_NormalColor = new pc.Color(i919[0], i919[1], i919[2], i919[3])
  i918.m_HighlightedColor = new pc.Color(i919[4], i919[5], i919[6], i919[7])
  i918.m_PressedColor = new pc.Color(i919[8], i919[9], i919[10], i919[11])
  i918.m_SelectedColor = new pc.Color(i919[12], i919[13], i919[14], i919[15])
  i918.m_DisabledColor = new pc.Color(i919[16], i919[17], i919[18], i919[19])
  i918.m_ColorMultiplier = i919[20]
  i918.m_FadeDuration = i919[21]
  return i918
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_HighlightedSprite')
  request.r(i921[2], i921[3], 0, i920, 'm_PressedSprite')
  request.r(i921[4], i921[5], 0, i920, 'm_SelectedSprite')
  request.r(i921[6], i921[7], 0, i920, 'm_DisabledSprite')
  return i920
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i923 = data
  i922.m_NormalTrigger = i923[0]
  i922.m_HighlightedTrigger = i923[1]
  i922.m_PressedTrigger = i923[2]
  i922.m_SelectedTrigger = i923[3]
  i922.m_DisabledTrigger = i923[4]
  return i922
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Text' )
  var i925 = data
  i924.m_FontData = request.d('UnityEngine.UI.FontData', i925[0], i924.m_FontData)
  i924.m_Text = i925[1]
  request.r(i925[2], i925[3], 0, i924, 'm_Material')
  i924.m_Maskable = !!i925[4]
  i924.m_Color = new pc.Color(i925[5], i925[6], i925[7], i925[8])
  i924.m_RaycastTarget = !!i925[9]
  i924.m_RaycastPadding = new pc.Vec4( i925[10], i925[11], i925[12], i925[13] )
  return i924
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.FontData' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_Font')
  i926.m_FontSize = i927[2]
  i926.m_FontStyle = i927[3]
  i926.m_BestFit = !!i927[4]
  i926.m_MinSize = i927[5]
  i926.m_MaxSize = i927[6]
  i926.m_Alignment = i927[7]
  i926.m_AlignByGeometry = !!i927[8]
  i926.m_RichText = !!i927[9]
  i926.m_HorizontalOverflow = i927[10]
  i926.m_VerticalOverflow = i927[11]
  i926.m_LineSpacing = i927[12]
  return i926
}

Deserializers["IngameTutorial"] = function (request, data, root) {
  var i928 = root || request.c( 'IngameTutorial' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'tutorialRect')
  return i928
}

Deserializers["UIFollowObject"] = function (request, data, root) {
  var i930 = root || request.c( 'UIFollowObject' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'target')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'animatorController')
  request.r(i933[2], i933[3], 0, i932, 'avatar')
  i932.updateMode = i933[4]
  i932.hasTransformHierarchy = !!i933[5]
  i932.applyRootMotion = !!i933[6]
  var i935 = i933[7]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.humanBones = i934
  i932.enabled = !!i933[8]
  return i932
}

Deserializers["Hint"] = function (request, data, root) {
  var i938 = root || request.c( 'Hint' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'targetObject')
  i938.hasClicked = !!i939[2]
  request.r(i939[3], i939[4], 0, i938, 'tutorial')
  return i938
}

Deserializers["GameManager"] = function (request, data, root) {
  var i940 = root || request.c( 'GameManager' )
  var i941 = data
  i940.canControl = !!i941[0]
  request.r(i941[1], i941[2], 0, i940, 'currentLevel')
  i940.layerBolt = UnityEngine.LayerMask.FromIntegerValue( i941[3] )
  i940.layerBar = UnityEngine.LayerMask.FromIntegerValue( i941[4] )
  i940.layerBoardHole = UnityEngine.LayerMask.FromIntegerValue( i941[5] )
  i940.layerBarHole = UnityEngine.LayerMask.FromIntegerValue( i941[6] )
  i940.startTime = i941[7]
  i940.count = i941[8]
  i940.canDestroyOnLoad = !!i941[9]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i943 = data
  i942.usedByComposite = !!i943[0]
  i942.autoTiling = !!i943[1]
  i942.size = new pc.Vec2( i943[2], i943[3] )
  i942.edgeRadius = i943[4]
  i942.enabled = !!i943[5]
  i942.isTrigger = !!i943[6]
  i942.usedByEffector = !!i943[7]
  i942.density = i943[8]
  i942.offset = new pc.Vec2( i943[9], i943[10] )
  request.r(i943[11], i943[12], 0, i942, 'material')
  return i942
}

Deserializers["wall"] = function (request, data, root) {
  var i944 = root || request.c( 'wall' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'exploreParticle')
  return i944
}

Deserializers["LoadEndcard"] = function (request, data, root) {
  var i946 = root || request.c( 'LoadEndcard' )
  var i947 = data
  return i946
}

Deserializers["store"] = function (request, data, root) {
  var i948 = root || request.c( 'store' )
  var i949 = data
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i951 = data
  i950.enabled = !!i951[0]
  i950.sortingLayerIndex = i951[1]
  i950.sortingOrder = i951[2]
  i950.sortingLayerName = i951[3]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i953 = data
  i952.enabled = !!i953[0]
  request.r(i953[1], i953[2], 0, i952, 'sharedMaterial')
  var i955 = i953[3]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.sharedMaterials = i954
  i952.receiveShadows = !!i953[4]
  i952.shadowCastingMode = i953[5]
  i952.sortingLayerID = i953[6]
  i952.sortingOrder = i953[7]
  i952.lightmapIndex = i953[8]
  i952.lightmapSceneIndex = i953[9]
  i952.lightmapScaleOffset = new pc.Vec4( i953[10], i953[11], i953[12], i953[13] )
  i952.lightProbeUsage = i953[14]
  i952.reflectionProbeUsage = i953[15]
  i952.frontSortingLayerID = i953[16]
  i952.frontSortingOrder = i953[17]
  i952.backSortingLayerID = i953[18]
  i952.backSortingOrder = i953[19]
  i952.alphaCutoff = i953[20]
  request.r(i953[21], i953[22], 0, i952, 'sprite')
  i952.tileMode = i953[23]
  i952.isCustomRangeActive = !!i953[24]
  i952.spriteSortPoint = i953[25]
  return i952
}

Deserializers["LevelController"] = function (request, data, root) {
  var i956 = root || request.c( 'LevelController' )
  var i957 = data
  i956.numScrewOnBar = i957[0]
  i956.fullSlot = !!i957[1]
  request.r(i957[2], i957[3], 0, i956, 'reset')
  request.r(i957[4], i957[5], 0, i956, 'currentBolt')
  request.r(i957[6], i957[7], 0, i956, 'select')
  request.r(i957[8], i957[9], 0, i956, 'place')
  request.r(i957[10], i957[11], 0, i956, 'confetti')
  i956.isUsingItem = !!i957[12]
  i956.won = !!i957[13]
  request.r(i957[14], i957[15], 0, i956, 'store')
  i956.isLv2 = !!i957[16]
  i956.firstTouch = !!i957[17]
  return i956
}

Deserializers["BoardHole"] = function (request, data, root) {
  var i958 = root || request.c( 'BoardHole' )
  var i959 = data
  i958.locked = !!i959[0]
  i958.isReward = !!i959[1]
  request.r(i959[2], i959[3], 0, i958, 'lockObj')
  request.r(i959[4], i959[5], 0, i958, 'rewardObj')
  return i958
}

Deserializers["Bar"] = function (request, data, root) {
  var i960 = root || request.c( 'Bar' )
  var i961 = data
  i960.configCenterOfMass = !!i961[0]
  i960.minusgravity = !!i961[1]
  i960.centerOfMass = new pc.Vec3( i961[2], i961[3], i961[4] )
  var i963 = i961[5]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('Bolt')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i960.bolts = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i967 = data
  i966.enabled = !!i967[0]
  i966.isTrigger = !!i967[1]
  i966.usedByEffector = !!i967[2]
  i966.density = i967[3]
  i966.offset = new pc.Vec2( i967[4], i967[5] )
  request.r(i967[6], i967[7], 0, i966, 'material')
  i966.usedByComposite = !!i967[8]
  i966.autoTiling = !!i967[9]
  var i969 = i967[10]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
  var i971 = i969[i + 0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
    i970.push( new pc.Vec2( i971[i + 0], i971[i + 1] ) );
  }
    i968.push( i970 );
  }
  i966.points = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i979 = data
  i978.bodyType = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'material')
  i978.simulated = !!i979[3]
  i978.useAutoMass = !!i979[4]
  i978.mass = i979[5]
  i978.drag = i979[6]
  i978.angularDrag = i979[7]
  i978.gravityScale = i979[8]
  i978.collisionDetectionMode = i979[9]
  i978.sleepMode = i979[10]
  i978.constraints = i979[11]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i981 = data
  i980.anchor = new pc.Vec2( i981[0], i981[1] )
  i980.connectedAnchor = new pc.Vec2( i981[2], i981[3] )
  i980.autoConfigureConnectedAnchor = !!i981[4]
  i980.enabled = !!i981[5]
  i980.useLimits = !!i981[6]
  i980.limits = request.d('UnityEngine.JointAngleLimits2D', i981[7], i980.limits)
  i980.useMotor = !!i981[8]
  i980.motor = request.d('UnityEngine.JointMotor2D', i981[9], i980.motor)
  request.r(i981[10], i981[11], 0, i980, 'connectedBody')
  i980.breakForce = i981[12]
  i980.breakTorque = i981[13]
  i980.enableCollision = !!i981[14]
  return i980
}

Deserializers["BarHole"] = function (request, data, root) {
  var i982 = root || request.c( 'BarHole' )
  var i983 = data
  return i982
}

Deserializers["Bolt"] = function (request, data, root) {
  var i984 = root || request.c( 'Bolt' )
  var i985 = data
  i984.isFallingScrew = !!i985[0]
  i984.screwBoard = !!i985[1]
  request.r(i985[2], i985[3], 0, i984, 'hand1')
  request.r(i985[4], i985[5], 0, i984, 'hand1portrait')
  request.r(i985[6], i985[7], 0, i984, 'hand2')
  request.r(i985[8], i985[9], 0, i984, 'handlandscape')
  request.r(i985[10], i985[11], 0, i984, 'tutorial2')
  request.r(i985[12], i985[13], 0, i984, 'oldspr')
  request.r(i985[14], i985[15], 0, i984, 'newspr')
  i984.isScrewed = !!i985[16]
  i984.locked = !!i985[17]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i987 = data
  i986.ambientIntensity = i987[0]
  i986.reflectionIntensity = i987[1]
  i986.ambientMode = i987[2]
  i986.ambientLight = new pc.Color(i987[3], i987[4], i987[5], i987[6])
  i986.ambientSkyColor = new pc.Color(i987[7], i987[8], i987[9], i987[10])
  i986.ambientGroundColor = new pc.Color(i987[11], i987[12], i987[13], i987[14])
  i986.ambientEquatorColor = new pc.Color(i987[15], i987[16], i987[17], i987[18])
  i986.fogColor = new pc.Color(i987[19], i987[20], i987[21], i987[22])
  i986.fogEndDistance = i987[23]
  i986.fogStartDistance = i987[24]
  i986.fogDensity = i987[25]
  i986.fog = !!i987[26]
  request.r(i987[27], i987[28], 0, i986, 'skybox')
  i986.fogMode = i987[29]
  var i989 = i987[30]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i989[i + 0]) );
  }
  i986.lightmaps = i988
  i986.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i987[31], i986.lightProbes)
  i986.lightmapsMode = i987[32]
  i986.mixedBakeMode = i987[33]
  i986.environmentLightingMode = i987[34]
  i986.ambientProbe = new pc.SphericalHarmonicsL2(i987[35])
  i986.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i987[36])
  i986.useReferenceAmbientProbe = !!i987[37]
  request.r(i987[38], i987[39], 0, i986, 'customReflection')
  request.r(i987[40], i987[41], 0, i986, 'defaultReflection')
  i986.defaultReflectionMode = i987[42]
  i986.defaultReflectionResolution = i987[43]
  i986.sunLightObjectId = i987[44]
  i986.pixelLightCount = i987[45]
  i986.defaultReflectionHDR = !!i987[46]
  i986.hasLightDataAsset = !!i987[47]
  i986.hasManualGenerate = !!i987[48]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'lightmapColor')
  request.r(i993[2], i993[3], 0, i992, 'lightmapDirection')
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i994 = root || new UnityEngine.LightProbes()
  var i995 = data
  return i994
}

Deserializers["Key"] = function (request, data, root) {
  var i1002 = root || request.c( 'Key' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'getItem')
  request.r(i1003[2], i1003[3], 0, i1002, 'bolt')
  request.r(i1003[4], i1003[5], 0, i1002, 'boardHole')
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.bounciness = i1005[1]
  i1004.friction = i1005[2]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1009[i + 0]));
  }
  i1006.ShaderCompilationErrors = i1008
  i1006.name = i1007[1]
  i1006.guid = i1007[2]
  var i1011 = i1007[3]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1006.shaderDefinedKeywords = i1010
  var i1013 = i1007[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1013[i + 0]) );
  }
  i1006.passes = i1012
  var i1015 = i1007[5]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1015[i + 0]) );
  }
  i1006.usePasses = i1014
  var i1017 = i1007[6]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1017[i + 0]) );
  }
  i1006.defaultParameterValues = i1016
  request.r(i1007[7], i1007[8], 0, i1006, 'unityFallbackShader')
  i1006.readDepth = !!i1007[9]
  i1006.isCreatedByShaderGraph = !!i1007[10]
  i1006.usedBatchUniforms = i1007[11]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1021 = data
  i1020.shaderName = i1021[0]
  i1020.errorMessage = i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1024 = root || new pc.UnityShaderPass()
  var i1025 = data
  i1024.id = i1025[0]
  i1024.subShaderIndex = i1025[1]
  i1024.name = i1025[2]
  i1024.passType = i1025[3]
  i1024.grabPassTextureName = i1025[4]
  i1024.usePass = !!i1025[5]
  i1024.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[6], i1024.zTest)
  i1024.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[7], i1024.zWrite)
  i1024.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[8], i1024.culling)
  i1024.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1025[9], i1024.blending)
  i1024.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1025[10], i1024.alphaBlending)
  i1024.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[11], i1024.colorWriteMask)
  i1024.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[12], i1024.offsetUnits)
  i1024.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[13], i1024.offsetFactor)
  i1024.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[14], i1024.stencilRef)
  i1024.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[15], i1024.stencilReadMask)
  i1024.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[16], i1024.stencilWriteMask)
  i1024.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1025[17], i1024.stencilOp)
  i1024.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1025[18], i1024.stencilOpFront)
  i1024.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1025[19], i1024.stencilOpBack)
  var i1027 = i1025[20]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1027[i + 0]) );
  }
  i1024.tags = i1026
  var i1029 = i1025[21]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1024.passDefinedKeywords = i1028
  var i1031 = i1025[22]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1031[i + 0]) );
  }
  i1024.passDefinedKeywordGroups = i1030
  var i1033 = i1025[23]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1033[i + 0]) );
  }
  i1024.variants = i1032
  var i1035 = i1025[24]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1035[i + 0]) );
  }
  i1024.excludedVariants = i1034
  i1024.hasDepthReader = !!i1025[25]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1037 = data
  i1036.val = i1037[0]
  i1036.name = i1037[1]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1039 = data
  i1038.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[0], i1038.src)
  i1038.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[1], i1038.dst)
  i1038.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[2], i1038.op)
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1041 = data
  i1040.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[0], i1040.pass)
  i1040.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[1], i1040.fail)
  i1040.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[2], i1040.zFail)
  i1040.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[3], i1040.comp)
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.value = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1048.keywords = i1050
  i1048.hasDiscard = !!i1049[1]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1055 = data
  i1054.passId = i1055[0]
  i1054.subShaderIndex = i1055[1]
  var i1057 = i1055[2]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1054.keywords = i1056
  i1054.vertexProgram = i1055[3]
  i1054.fragmentProgram = i1055[4]
  i1054.compiledForWebGL2 = !!i1055[5]
  i1054.readDepth = !!i1055[6]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'shader')
  i1060.pass = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.type = i1065[1]
  i1064.value = new pc.Vec4( i1065[2], i1065[3], i1065[4], i1065[5] )
  i1064.textureValue = i1065[6]
  i1064.shaderPropertyFlag = i1065[7]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1067 = data
  i1066.name = i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'texture')
  i1066.aabb = i1067[3]
  i1066.vertices = i1067[4]
  i1066.triangles = i1067[5]
  i1066.textureRect = UnityEngine.Rect.MinMaxRect(i1067[6], i1067[7], i1067[8], i1067[9])
  i1066.packedRect = UnityEngine.Rect.MinMaxRect(i1067[10], i1067[11], i1067[12], i1067[13])
  i1066.border = new pc.Vec4( i1067[14], i1067[15], i1067[16], i1067[17] )
  i1066.transparency = i1067[18]
  i1066.bounds = i1067[19]
  i1066.pixelsPerUnit = i1067[20]
  i1066.textureWidth = i1067[21]
  i1066.textureHeight = i1067[22]
  i1066.nativeSize = new pc.Vec2( i1067[23], i1067[24] )
  i1066.pivot = new pc.Vec2( i1067[25], i1067[26] )
  i1066.textureRectOffset = new pc.Vec2( i1067[27], i1067[28] )
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1069 = data
  i1068.name = i1069[0]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.wrapMode = i1071[1]
  i1070.isLooping = !!i1071[2]
  i1070.length = i1071[3]
  var i1073 = i1071[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1073[i + 0]) );
  }
  i1070.curves = i1072
  var i1075 = i1071[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1075[i + 0]) );
  }
  i1070.events = i1074
  i1070.halfPrecision = !!i1071[6]
  i1070._frameRate = i1071[7]
  i1070.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1071[8], i1070.localBounds)
  i1070.hasMuscleCurves = !!i1071[9]
  var i1077 = i1071[10]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1070.clipMuscleConstant = i1076
  i1070.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1071[11], i1070.clipBindingConstant)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1081 = data
  i1080.path = i1081[0]
  i1080.hash = i1081[1]
  i1080.componentType = i1081[2]
  i1080.property = i1081[3]
  i1080.keys = i1081[4]
  var i1083 = i1081[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1083[i + 0]) );
  }
  i1080.objectReferenceKeys = i1082
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1087 = data
  i1086.time = i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'value')
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1091 = data
  i1090.functionName = i1091[0]
  i1090.floatParameter = i1091[1]
  i1090.intParameter = i1091[2]
  i1090.stringParameter = i1091[3]
  request.r(i1091[4], i1091[5], 0, i1090, 'objectReferenceParameter')
  i1090.time = i1091[6]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1093 = data
  i1092.center = new pc.Vec3( i1093[0], i1093[1], i1093[2] )
  i1092.extends = new pc.Vec3( i1093[3], i1093[4], i1093[5] )
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1096.genericBindings = i1098
  var i1101 = i1097[1]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1096.pptrCurveMapping = i1100
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.ascent = i1103[1]
  i1102.originalLineHeight = i1103[2]
  i1102.fontSize = i1103[3]
  var i1105 = i1103[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1105[i + 0]) );
  }
  i1102.characterInfo = i1104
  request.r(i1103[5], i1103[6], 0, i1102, 'texture')
  i1102.originalFontSize = i1103[7]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1109 = data
  i1108.index = i1109[0]
  i1108.advance = i1109[1]
  i1108.bearing = i1109[2]
  i1108.glyphWidth = i1109[3]
  i1108.glyphHeight = i1109[4]
  i1108.minX = i1109[5]
  i1108.maxX = i1109[6]
  i1108.minY = i1109[7]
  i1108.maxY = i1109[8]
  i1108.uvBottomLeftX = i1109[9]
  i1108.uvBottomLeftY = i1109[10]
  i1108.uvBottomRightX = i1109[11]
  i1108.uvBottomRightY = i1109[12]
  i1108.uvTopLeftX = i1109[13]
  i1108.uvTopLeftY = i1109[14]
  i1108.uvTopRightX = i1109[15]
  i1108.uvTopRightY = i1109[16]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1111 = data
  i1110.name = i1111[0]
  var i1113 = i1111[1]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1113[i + 0]) );
  }
  i1110.layers = i1112
  var i1115 = i1111[2]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1115[i + 0]) );
  }
  i1110.parameters = i1114
  i1110.animationClips = i1111[3]
  i1110.avatarUnsupported = i1111[4]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.defaultWeight = i1119[1]
  i1118.blendingMode = i1119[2]
  i1118.avatarMask = i1119[3]
  i1118.syncedLayerIndex = i1119[4]
  i1118.syncedLayerAffectsTiming = !!i1119[5]
  i1118.syncedLayers = i1119[6]
  i1118.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1119[7], i1118.stateMachine)
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1121 = data
  i1120.id = i1121[0]
  i1120.name = i1121[1]
  i1120.path = i1121[2]
  var i1123 = i1121[3]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1123[i + 0]) );
  }
  i1120.states = i1122
  var i1125 = i1121[4]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1125[i + 0]) );
  }
  i1120.machines = i1124
  var i1127 = i1121[5]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1127[i + 0]) );
  }
  i1120.entryStateTransitions = i1126
  var i1129 = i1121[6]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1129[i + 0]) );
  }
  i1120.exitStateTransitions = i1128
  var i1131 = i1121[7]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1131[i + 0]) );
  }
  i1120.anyStateTransitions = i1130
  i1120.defaultStateId = i1121[8]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1135 = data
  i1134.id = i1135[0]
  i1134.name = i1135[1]
  i1134.cycleOffset = i1135[2]
  i1134.cycleOffsetParameter = i1135[3]
  i1134.cycleOffsetParameterActive = !!i1135[4]
  i1134.mirror = !!i1135[5]
  i1134.mirrorParameter = i1135[6]
  i1134.mirrorParameterActive = !!i1135[7]
  i1134.motionId = i1135[8]
  i1134.nameHash = i1135[9]
  i1134.fullPathHash = i1135[10]
  i1134.speed = i1135[11]
  i1134.speedParameter = i1135[12]
  i1134.speedParameterActive = !!i1135[13]
  i1134.tag = i1135[14]
  i1134.tagHash = i1135[15]
  i1134.writeDefaultValues = !!i1135[16]
  var i1137 = i1135[17]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1134.behaviours = i1136
  var i1139 = i1135[18]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1139[i + 0]) );
  }
  i1134.transitions = i1138
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1145 = data
  i1144.fullPath = i1145[0]
  i1144.canTransitionToSelf = !!i1145[1]
  i1144.duration = i1145[2]
  i1144.exitTime = i1145[3]
  i1144.hasExitTime = !!i1145[4]
  i1144.hasFixedDuration = !!i1145[5]
  i1144.interruptionSource = i1145[6]
  i1144.offset = i1145[7]
  i1144.orderedInterruption = !!i1145[8]
  i1144.destinationStateId = i1145[9]
  i1144.isExit = !!i1145[10]
  i1144.mute = !!i1145[11]
  i1144.solo = !!i1145[12]
  var i1147 = i1145[13]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1147[i + 0]) );
  }
  i1144.conditions = i1146
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1153 = data
  i1152.destinationStateId = i1153[0]
  i1152.isExit = !!i1153[1]
  i1152.mute = !!i1153[2]
  i1152.solo = !!i1153[3]
  var i1155 = i1153[4]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1155[i + 0]) );
  }
  i1152.conditions = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1159 = data
  i1158.defaultBool = !!i1159[0]
  i1158.defaultFloat = i1159[1]
  i1158.defaultInt = i1159[2]
  i1158.name = i1159[3]
  i1158.nameHash = i1159[4]
  i1158.type = i1159[5]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1161 = data
  i1160.name = i1161[0]
  i1160.bytes64 = i1161[1]
  i1160.data = i1161[2]
  return i1160
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1162 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 2) {
  request.r(i1165[i + 0], i1165[i + 1], 2, i1164, '')
  }
  i1162.atlasAssets = i1164
  i1162.scale = i1163[1]
  request.r(i1163[2], i1163[3], 0, i1162, 'skeletonJSON')
  i1162.isUpgradingBlendModeMaterials = !!i1163[4]
  i1162.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1163[5], i1162.blendModeMaterials)
  var i1167 = i1163[6]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1162.skeletonDataModifiers = i1166
  var i1169 = i1163[7]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( i1169[i + 0] );
  }
  i1162.fromAnimation = i1168
  var i1171 = i1163[8]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( i1171[i + 0] );
  }
  i1162.toAnimation = i1170
  i1162.duration = i1163[9]
  i1162.defaultMix = i1163[10]
  request.r(i1163[11], i1163[12], 0, i1162, 'controller')
  return i1162
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1174 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1175 = data
  i1174.applyAdditiveMaterial = !!i1175[0]
  var i1177 = i1175[1]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1177[i + 0]));
  }
  i1174.additiveMaterials = i1176
  var i1179 = i1175[2]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1179[i + 0]));
  }
  i1174.multiplyMaterials = i1178
  var i1181 = i1175[3]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1181[i + 0]));
  }
  i1174.screenMaterials = i1180
  i1174.requiresBlendModeMaterials = !!i1175[4]
  return i1174
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1184 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1185 = data
  i1184.pageName = i1185[0]
  request.r(i1185[1], i1185[2], 0, i1184, 'material')
  return i1184
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1188 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'atlasFile')
  var i1191 = i1189[2]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 2, i1190, '')
  }
  i1188.materials = i1190
  i1188.textureLoadingMode = i1189[3]
  request.r(i1189[4], i1189[5], 0, i1188, 'onDemandTextureLoader')
  return i1188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1193 = data
  i1192.hashCode = i1193[0]
  request.r(i1193[1], i1193[2], 0, i1192, 'material')
  i1192.materialHashCode = i1193[3]
  request.r(i1193[4], i1193[5], 0, i1192, 'atlas')
  i1192.normalStyle = i1193[6]
  i1192.normalSpacingOffset = i1193[7]
  i1192.boldStyle = i1193[8]
  i1192.boldSpacing = i1193[9]
  i1192.italicStyle = i1193[10]
  i1192.tabSize = i1193[11]
  i1192.m_Version = i1193[12]
  i1192.m_SourceFontFileGUID = i1193[13]
  request.r(i1193[14], i1193[15], 0, i1192, 'm_SourceFontFile_EditorRef')
  request.r(i1193[16], i1193[17], 0, i1192, 'm_SourceFontFile')
  i1192.m_AtlasPopulationMode = i1193[18]
  i1192.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1193[19], i1192.m_FaceInfo)
  var i1195 = i1193[20]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('UnityEngine.TextCore.Glyph', i1195[i + 0]));
  }
  i1192.m_GlyphTable = i1194
  var i1197 = i1193[21]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('TMPro.TMP_Character', i1197[i + 0]));
  }
  i1192.m_CharacterTable = i1196
  var i1199 = i1193[22]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 2, i1198, '')
  }
  i1192.m_AtlasTextures = i1198
  i1192.m_AtlasTextureIndex = i1193[23]
  i1192.m_IsMultiAtlasTexturesEnabled = !!i1193[24]
  i1192.m_ClearDynamicDataOnBuild = !!i1193[25]
  var i1201 = i1193[26]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('UnityEngine.TextCore.GlyphRect', i1201[i + 0]));
  }
  i1192.m_UsedGlyphRects = i1200
  var i1203 = i1193[27]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('UnityEngine.TextCore.GlyphRect', i1203[i + 0]));
  }
  i1192.m_FreeGlyphRects = i1202
  i1192.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1193[28], i1192.m_fontInfo)
  i1192.m_AtlasWidth = i1193[29]
  i1192.m_AtlasHeight = i1193[30]
  i1192.m_AtlasPadding = i1193[31]
  i1192.m_AtlasRenderMode = i1193[32]
  var i1205 = i1193[33]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('TMPro.TMP_Glyph', i1205[i + 0]));
  }
  i1192.m_glyphInfoList = i1204
  i1192.m_KerningTable = request.d('TMPro.KerningTable', i1193[34], i1192.m_KerningTable)
  i1192.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1193[35], i1192.m_FontFeatureTable)
  var i1207 = i1193[36]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 1, i1206, '')
  }
  i1192.fallbackFontAssets = i1206
  var i1209 = i1193[37]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 1, i1208, '')
  }
  i1192.m_FallbackFontAssetTable = i1208
  i1192.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1193[38], i1192.m_CreationSettings)
  var i1211 = i1193[39]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('TMPro.TMP_FontWeightPair', i1211[i + 0]) );
  }
  i1192.m_FontWeightTable = i1210
  var i1213 = i1193[40]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('TMPro.TMP_FontWeightPair', i1213[i + 0]) );
  }
  i1192.fontWeights = i1212
  return i1192
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1215 = data
  i1214.m_FaceIndex = i1215[0]
  i1214.m_FamilyName = i1215[1]
  i1214.m_StyleName = i1215[2]
  i1214.m_PointSize = i1215[3]
  i1214.m_Scale = i1215[4]
  i1214.m_UnitsPerEM = i1215[5]
  i1214.m_LineHeight = i1215[6]
  i1214.m_AscentLine = i1215[7]
  i1214.m_CapLine = i1215[8]
  i1214.m_MeanLine = i1215[9]
  i1214.m_Baseline = i1215[10]
  i1214.m_DescentLine = i1215[11]
  i1214.m_SuperscriptOffset = i1215[12]
  i1214.m_SuperscriptSize = i1215[13]
  i1214.m_SubscriptOffset = i1215[14]
  i1214.m_SubscriptSize = i1215[15]
  i1214.m_UnderlineOffset = i1215[16]
  i1214.m_UnderlineThickness = i1215[17]
  i1214.m_StrikethroughOffset = i1215[18]
  i1214.m_StrikethroughThickness = i1215[19]
  i1214.m_TabWidth = i1215[20]
  return i1214
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1219 = data
  i1218.m_Index = i1219[0]
  i1218.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1219[1], i1218.m_Metrics)
  i1218.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1219[2], i1218.m_GlyphRect)
  i1218.m_Scale = i1219[3]
  i1218.m_AtlasIndex = i1219[4]
  i1218.m_ClassDefinitionType = i1219[5]
  return i1218
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1221 = data
  i1220.m_Width = i1221[0]
  i1220.m_Height = i1221[1]
  i1220.m_HorizontalBearingX = i1221[2]
  i1220.m_HorizontalBearingY = i1221[3]
  i1220.m_HorizontalAdvance = i1221[4]
  return i1220
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1223 = data
  i1222.m_X = i1223[0]
  i1222.m_Y = i1223[1]
  i1222.m_Width = i1223[2]
  i1222.m_Height = i1223[3]
  return i1222
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_Character' )
  var i1227 = data
  i1226.m_ElementType = i1227[0]
  i1226.m_Unicode = i1227[1]
  i1226.m_GlyphIndex = i1227[2]
  i1226.m_Scale = i1227[3]
  return i1226
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1233 = data
  i1232.Name = i1233[0]
  i1232.PointSize = i1233[1]
  i1232.Scale = i1233[2]
  i1232.CharacterCount = i1233[3]
  i1232.LineHeight = i1233[4]
  i1232.Baseline = i1233[5]
  i1232.Ascender = i1233[6]
  i1232.CapHeight = i1233[7]
  i1232.Descender = i1233[8]
  i1232.CenterLine = i1233[9]
  i1232.SuperscriptOffset = i1233[10]
  i1232.SubscriptOffset = i1233[11]
  i1232.SubSize = i1233[12]
  i1232.Underline = i1233[13]
  i1232.UnderlineThickness = i1233[14]
  i1232.strikethrough = i1233[15]
  i1232.strikethroughThickness = i1233[16]
  i1232.TabWidth = i1233[17]
  i1232.Padding = i1233[18]
  i1232.AtlasWidth = i1233[19]
  i1232.AtlasHeight = i1233[20]
  return i1232
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1237 = data
  i1236.id = i1237[0]
  i1236.x = i1237[1]
  i1236.y = i1237[2]
  i1236.width = i1237[3]
  i1236.height = i1237[4]
  i1236.xOffset = i1237[5]
  i1236.yOffset = i1237[6]
  i1236.xAdvance = i1237[7]
  i1236.scale = i1237[8]
  return i1236
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.KerningTable' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.KerningPair', i1241[i + 0]));
  }
  i1238.kerningPairs = i1240
  return i1238
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.KerningPair' )
  var i1245 = data
  i1244.xOffset = i1245[0]
  i1244.m_FirstGlyph = i1245[1]
  i1244.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1245[2], i1244.m_FirstGlyphAdjustments)
  i1244.m_SecondGlyph = i1245[3]
  i1244.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1245[4], i1244.m_SecondGlyphAdjustments)
  i1244.m_IgnoreSpacingAdjustments = !!i1245[5]
  return i1244
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1249[i + 0]));
  }
  i1246.m_GlyphPairAdjustmentRecords = i1248
  return i1246
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1253 = data
  i1252.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1253[0], i1252.m_FirstAdjustmentRecord)
  i1252.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1253[1], i1252.m_SecondAdjustmentRecord)
  i1252.m_FeatureLookupFlags = i1253[2]
  return i1252
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1255 = data
  i1254.m_GlyphIndex = i1255[0]
  i1254.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1255[1], i1254.m_GlyphValueRecord)
  return i1254
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1257 = data
  i1256.m_XPlacement = i1257[0]
  i1256.m_YPlacement = i1257[1]
  i1256.m_XAdvance = i1257[2]
  i1256.m_YAdvance = i1257[3]
  return i1256
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1261 = data
  i1260.sourceFontFileName = i1261[0]
  i1260.sourceFontFileGUID = i1261[1]
  i1260.pointSizeSamplingMode = i1261[2]
  i1260.pointSize = i1261[3]
  i1260.padding = i1261[4]
  i1260.packingMode = i1261[5]
  i1260.atlasWidth = i1261[6]
  i1260.atlasHeight = i1261[7]
  i1260.characterSetSelectionMode = i1261[8]
  i1260.characterSequence = i1261[9]
  i1260.referencedFontAssetGUID = i1261[10]
  i1260.referencedTextAssetGUID = i1261[11]
  i1260.fontStyle = i1261[12]
  i1260.fontStyleModifier = i1261[13]
  i1260.renderMode = i1261[14]
  i1260.includeFontFeatures = !!i1261[15]
  return i1260
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'regularTypeface')
  request.r(i1265[2], i1265[3], 0, i1264, 'italicTypeface')
  return i1264
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1267 = data
  i1266.hashCode = i1267[0]
  request.r(i1267[1], i1267[2], 0, i1266, 'material')
  i1266.materialHashCode = i1267[3]
  request.r(i1267[4], i1267[5], 0, i1266, 'spriteSheet')
  var i1269 = i1267[6]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.TMP_Sprite', i1269[i + 0]));
  }
  i1266.spriteInfoList = i1268
  var i1271 = i1267[7]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1266.fallbackSpriteAssets = i1270
  i1266.m_Version = i1267[8]
  i1266.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1267[9], i1266.m_FaceInfo)
  var i1273 = i1267[10]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.TMP_SpriteCharacter', i1273[i + 0]));
  }
  i1266.m_SpriteCharacterTable = i1272
  var i1275 = i1267[11]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.TMP_SpriteGlyph', i1275[i + 0]));
  }
  i1266.m_SpriteGlyphTable = i1274
  return i1266
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.hashCode = i1279[1]
  i1278.unicode = i1279[2]
  i1278.pivot = new pc.Vec2( i1279[3], i1279[4] )
  request.r(i1279[5], i1279[6], 0, i1278, 'sprite')
  i1278.id = i1279[7]
  i1278.x = i1279[8]
  i1278.y = i1279[9]
  i1278.width = i1279[10]
  i1278.height = i1279[11]
  i1278.xOffset = i1279[12]
  i1278.yOffset = i1279[13]
  i1278.xAdvance = i1279[14]
  i1278.scale = i1279[15]
  return i1278
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1285 = data
  i1284.m_Name = i1285[0]
  i1284.m_HashCode = i1285[1]
  i1284.m_ElementType = i1285[2]
  i1284.m_Unicode = i1285[3]
  i1284.m_GlyphIndex = i1285[4]
  i1284.m_Scale = i1285[5]
  return i1284
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'sprite')
  i1288.m_Index = i1289[2]
  i1288.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1289[3], i1288.m_Metrics)
  i1288.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1289[4], i1288.m_GlyphRect)
  i1288.m_Scale = i1289[5]
  i1288.m_AtlasIndex = i1289[6]
  i1288.m_ClassDefinitionType = i1289[7]
  return i1288
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_Style', i1293[i + 0]));
  }
  i1290.m_StyleList = i1292
  return i1290
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_Style' )
  var i1297 = data
  i1296.m_Name = i1297[0]
  i1296.m_HashCode = i1297[1]
  i1296.m_OpeningDefinition = i1297[2]
  i1296.m_ClosingDefinition = i1297[3]
  i1296.m_OpeningTagArray = i1297[4]
  i1296.m_ClosingTagArray = i1297[5]
  i1296.m_OpeningTagUnicodeArray = i1297[6]
  i1296.m_ClosingTagUnicodeArray = i1297[7]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1301[i + 0]) );
  }
  i1298.files = i1300
  i1298.componentToPrefabIds = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1305 = data
  i1304.path = i1305[0]
  request.r(i1305[1], i1305[2], 0, i1304, 'unityObject')
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1309[i + 0]) );
  }
  i1306.scriptsExecutionOrder = i1308
  var i1311 = i1307[1]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1311[i + 0]) );
  }
  i1306.sortingLayers = i1310
  var i1313 = i1307[2]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1313[i + 0]) );
  }
  i1306.cullingLayers = i1312
  i1306.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1307[3], i1306.timeSettings)
  i1306.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1307[4], i1306.physicsSettings)
  i1306.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1307[5], i1306.physics2DSettings)
  i1306.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1307[6], i1306.qualitySettings)
  i1306.enableRealtimeShadows = !!i1307[7]
  i1306.enableAutoInstancing = !!i1307[8]
  i1306.enableDynamicBatching = !!i1307[9]
  i1306.lightmapEncodingQuality = i1307[10]
  i1306.desiredColorSpace = i1307[11]
  var i1315 = i1307[12]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( i1315[i + 0] );
  }
  i1306.allTags = i1314
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.value = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1323 = data
  i1322.id = i1323[0]
  i1322.name = i1323[1]
  i1322.value = i1323[2]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1327 = data
  i1326.id = i1327[0]
  i1326.name = i1327[1]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1329 = data
  i1328.fixedDeltaTime = i1329[0]
  i1328.maximumDeltaTime = i1329[1]
  i1328.timeScale = i1329[2]
  i1328.maximumParticleTimestep = i1329[3]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1331 = data
  i1330.gravity = new pc.Vec3( i1331[0], i1331[1], i1331[2] )
  i1330.defaultSolverIterations = i1331[3]
  i1330.bounceThreshold = i1331[4]
  i1330.autoSyncTransforms = !!i1331[5]
  i1330.autoSimulation = !!i1331[6]
  var i1333 = i1331[7]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1333[i + 0]) );
  }
  i1330.collisionMatrix = i1332
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1337 = data
  i1336.enabled = !!i1337[0]
  i1336.layerId = i1337[1]
  i1336.otherLayerId = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'material')
  i1338.gravity = new pc.Vec2( i1339[2], i1339[3] )
  i1338.positionIterations = i1339[4]
  i1338.velocityIterations = i1339[5]
  i1338.velocityThreshold = i1339[6]
  i1338.maxLinearCorrection = i1339[7]
  i1338.maxAngularCorrection = i1339[8]
  i1338.maxTranslationSpeed = i1339[9]
  i1338.maxRotationSpeed = i1339[10]
  i1338.baumgarteScale = i1339[11]
  i1338.baumgarteTOIScale = i1339[12]
  i1338.timeToSleep = i1339[13]
  i1338.linearSleepTolerance = i1339[14]
  i1338.angularSleepTolerance = i1339[15]
  i1338.defaultContactOffset = i1339[16]
  i1338.autoSimulation = !!i1339[17]
  i1338.queriesHitTriggers = !!i1339[18]
  i1338.queriesStartInColliders = !!i1339[19]
  i1338.callbacksOnDisable = !!i1339[20]
  i1338.reuseCollisionCallbacks = !!i1339[21]
  i1338.autoSyncTransforms = !!i1339[22]
  var i1341 = i1339[23]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1341[i + 0]) );
  }
  i1338.collisionMatrix = i1340
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1345 = data
  i1344.enabled = !!i1345[0]
  i1344.layerId = i1345[1]
  i1344.otherLayerId = i1345[2]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1349[i + 0]) );
  }
  i1346.qualityLevels = i1348
  var i1351 = i1347[1]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( i1351[i + 0] );
  }
  i1346.names = i1350
  i1346.shadows = i1347[2]
  i1346.anisotropicFiltering = i1347[3]
  i1346.antiAliasing = i1347[4]
  i1346.lodBias = i1347[5]
  i1346.shadowCascades = i1347[6]
  i1346.shadowDistance = i1347[7]
  i1346.shadowmaskMode = i1347[8]
  i1346.shadowProjection = i1347[9]
  i1346.shadowResolution = i1347[10]
  i1346.softParticles = !!i1347[11]
  i1346.softVegetation = !!i1347[12]
  i1346.activeColorSpace = i1347[13]
  i1346.desiredColorSpace = i1347[14]
  i1346.masterTextureLimit = i1347[15]
  i1346.maxQueuedFrames = i1347[16]
  i1346.particleRaycastBudget = i1347[17]
  i1346.pixelLightCount = i1347[18]
  i1346.realtimeReflectionProbes = !!i1347[19]
  i1346.shadowCascade2Split = i1347[20]
  i1346.shadowCascade4Split = new pc.Vec3( i1347[21], i1347[22], i1347[23] )
  i1346.streamingMipmapsActive = !!i1347[24]
  i1346.vSyncCount = i1347[25]
  i1346.asyncUploadBufferSize = i1347[26]
  i1346.asyncUploadTimeSlice = i1347[27]
  i1346.billboardsFaceCameraPosition = !!i1347[28]
  i1346.shadowNearPlaneOffset = i1347[29]
  i1346.streamingMipmapsMemoryBudget = i1347[30]
  i1346.maximumLODLevel = i1347[31]
  i1346.streamingMipmapsAddAllCameras = !!i1347[32]
  i1346.streamingMipmapsMaxLevelReduction = i1347[33]
  i1346.streamingMipmapsRenderersPerFrame = i1347[34]
  i1346.resolutionScalingFixedDPIFactor = i1347[35]
  i1346.streamingMipmapsMaxFileIORequests = i1347[36]
  i1346.currentQualityLevel = i1347[37]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1357 = data
  i1356.weight = i1357[0]
  i1356.vertices = i1357[1]
  i1356.normals = i1357[2]
  i1356.tangents = i1357[3]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1361 = data
  i1360.mode = i1361[0]
  i1360.parameter = i1361[1]
  i1360.threshold = i1361[2]
  return i1360
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1363 = data
  i1362.xPlacement = i1363[0]
  i1362.yPlacement = i1363[1]
  i1362.xAdvance = i1363[2]
  i1362.yAdvance = i1363[3]
  return i1362
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"anchor":0,"connectedAnchor":2,"autoConfigureConnectedAnchor":4,"enabled":5,"useLimits":6,"limits":7,"useMotor":8,"motor":9,"connectedBody":10,"breakForce":12,"breakTorque":13,"enableCollision":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[22],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[54],"84":[54],"85":[54],"86":[54],"87":[54],"88":[54],"55":[54],"89":[54],"90":[54],"91":[54],"92":[54],"93":[54],"94":[54],"95":[22],"96":[19],"97":[98],"99":[98],"29":[28],"100":[101],"102":[28],"103":[28],"31":[29],"33":[32,28],"104":[28],"30":[29],"105":[28],"106":[28],"107":[28],"108":[28],"109":[28],"110":[28],"111":[28],"112":[28],"113":[28],"114":[32,28],"115":[28],"116":[28],"117":[28],"118":[28],"37":[32,28],"119":[28],"120":[26],"121":[26],"27":[26],"122":[26],"123":[22],"124":[22],"125":[101],"126":[22],"127":[128],"129":[28],"130":[32,28],"17":[19],"131":[32,28],"132":[41,19],"133":[19],"134":[19,18],"135":[76],"136":[54],"137":[128],"138":[139],"140":[28],"141":[19,28],"142":[28,32],"143":[28],"144":[32,28],"145":[19],"146":[32,28],"147":[28],"148":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MonoBehaviour","AutoDestroy","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","ObjectPool","UnityEngine.GameObject","AudioManager","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","Saw","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","store","LoadEndcard","UnityEngine.UI.Text","UnityEngine.Font","IngameTutorial","UIFollowObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Hint","GameManager","UnityEngine.BoxCollider2D","wall","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteMask","LevelController","BoardHole","Bar","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","UnityEngine.HingeJoint2D","BarHole","Bolt","UnityEngine.Cubemap","Key","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.20f1";

Deserializers.productName = "os";

Deserializers.lunaInitializationTime = "09/12/2024 18:26:26";

Deserializers.lunaDaysRunning = "3.3";

Deserializers.lunaVersion = "6.1.0";

Deserializers.lunaSHA = "79acaf78c62676b38c36badeeb2083e64dfc1990";

Deserializers.creativeName = "map_1_f";

Deserializers.lunaAppID = "20677";

Deserializers.projectId = "ee028014fef8ec8489a6588f65c184cb";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1853";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5581";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.os";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "dc6835c0-a86a-4896-9645-ea349dbfc602";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

