var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointSpring' )
  var i691 = data
  i690.spring = i691[0]
  i690.damper = i691[1]
  i690.targetPosition = i691[2]
  return i690
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor' )
  var i693 = data
  i692.m_TargetVelocity = i693[0]
  i692.m_Force = i693[1]
  i692.m_FreeSpin = i693[2]
  return i692
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointLimits' )
  var i695 = data
  i694.m_Min = i695[0]
  i694.m_Max = i695[1]
  i694.m_Bounciness = i695[2]
  i694.m_BounceMinVelocity = i695[3]
  i694.m_ContactDistance = i695[4]
  i694.minBounce = i695[5]
  i694.maxBounce = i695[6]
  return i694
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointDrive' )
  var i697 = data
  i696.m_PositionSpring = i697[0]
  i696.m_PositionDamper = i697[1]
  i696.m_MaximumForce = i697[2]
  i696.m_UseAcceleration = i697[3]
  return i696
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i699 = data
  i698.m_Spring = i699[0]
  i698.m_Damper = i699[1]
  return i698
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i701 = data
  i700.m_Limit = i701[0]
  i700.m_Bounciness = i701[1]
  i700.m_ContactDistance = i701[2]
  return i700
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i703 = data
  i702.m_ExtremumSlip = i703[0]
  i702.m_ExtremumValue = i703[1]
  i702.m_AsymptoteSlip = i703[2]
  i702.m_AsymptoteValue = i703[3]
  i702.m_Stiffness = i703[4]
  return i702
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i705 = data
  i704.m_LowerAngle = i705[0]
  i704.m_UpperAngle = i705[1]
  return i704
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i707 = data
  i706.m_MotorSpeed = i707[0]
  i706.m_MaximumMotorTorque = i707[1]
  return i706
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i709 = data
  i708.m_DampingRatio = i709[0]
  i708.m_Frequency = i709[1]
  i708.m_Angle = i709[2]
  return i708
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i711 = data
  i710.m_LowerTranslation = i711[0]
  i710.m_UpperTranslation = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i713 = data
  i712.name = i713[0]
  i712.width = i713[1]
  i712.height = i713[2]
  i712.mipmapCount = i713[3]
  i712.anisoLevel = i713[4]
  i712.filterMode = i713[5]
  i712.hdr = !!i713[6]
  i712.format = i713[7]
  i712.wrapMode = i713[8]
  i712.alphaIsTransparency = !!i713[9]
  i712.alphaSource = i713[10]
  i712.graphicsFormat = i713[11]
  i712.sRGBTexture = !!i713[12]
  i712.desiredColorSpace = i713[13]
  i712.wrapU = i713[14]
  i712.wrapV = i713[15]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i714 = root || new pc.UnityMaterial()
  var i715 = data
  i714.name = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'shader')
  i714.renderQueue = i715[3]
  i714.enableInstancing = !!i715[4]
  var i717 = i715[5]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i717[i + 0]) );
  }
  i714.floatParameters = i716
  var i719 = i715[6]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i719[i + 0]) );
  }
  i714.colorParameters = i718
  var i721 = i715[7]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i721[i + 0]) );
  }
  i714.vectorParameters = i720
  var i723 = i715[8]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i723[i + 0]) );
  }
  i714.textureParameters = i722
  var i725 = i715[9]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i725[i + 0]) );
  }
  i714.materialFlags = i724
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i729 = data
  i728.name = i729[0]
  i728.value = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i733 = data
  i732.name = i733[0]
  i732.value = new pc.Color(i733[1], i733[2], i733[3], i733[4])
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i737 = data
  i736.name = i737[0]
  i736.value = new pc.Vec4( i737[1], i737[2], i737[3], i737[4] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i741 = data
  i740.name = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'value')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i745 = data
  i744.name = i745[0]
  i744.enabled = !!i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i747 = data
  i746.position = new pc.Vec3( i747[0], i747[1], i747[2] )
  i746.scale = new pc.Vec3( i747[3], i747[4], i747[5] )
  i746.rotation = new pc.Quat(i747[6], i747[7], i747[8], i747[9])
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'clip')
  request.r(i749[2], i749[3], 0, i748, 'outputAudioMixerGroup')
  i748.playOnAwake = !!i749[4]
  i748.loop = !!i749[5]
  i748.time = i749[6]
  i748.volume = i749[7]
  i748.pitch = i749[8]
  i748.enabled = !!i749[9]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i751 = data
  i750.name = i751[0]
  i750.tagId = i751[1]
  i750.enabled = !!i751[2]
  i750.isStatic = !!i751[3]
  i750.layer = i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i753 = data
  i752.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i753[0], i752.main)
  i752.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i753[1], i752.colorBySpeed)
  i752.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i753[2], i752.colorOverLifetime)
  i752.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i753[3], i752.emission)
  i752.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i753[4], i752.rotationBySpeed)
  i752.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i753[5], i752.rotationOverLifetime)
  i752.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i753[6], i752.shape)
  i752.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i753[7], i752.sizeBySpeed)
  i752.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i753[8], i752.sizeOverLifetime)
  i752.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i753[9], i752.textureSheetAnimation)
  i752.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i753[10], i752.velocityOverLifetime)
  i752.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i753[11], i752.noise)
  i752.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i753[12], i752.inheritVelocity)
  i752.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i753[13], i752.forceOverLifetime)
  i752.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i753[14], i752.limitVelocityOverLifetime)
  i752.useAutoRandomSeed = !!i753[15]
  i752.randomSeed = i753[16]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemMain()
  var i755 = data
  i754.duration = i755[0]
  i754.loop = !!i755[1]
  i754.prewarm = !!i755[2]
  i754.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.startDelay)
  i754.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[4], i754.startLifetime)
  i754.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[5], i754.startSpeed)
  i754.startSize3D = !!i755[6]
  i754.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[7], i754.startSizeX)
  i754.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[8], i754.startSizeY)
  i754.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[9], i754.startSizeZ)
  i754.startRotation3D = !!i755[10]
  i754.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[11], i754.startRotationX)
  i754.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[12], i754.startRotationY)
  i754.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[13], i754.startRotationZ)
  i754.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i755[14], i754.startColor)
  i754.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[15], i754.gravityModifier)
  i754.simulationSpace = i755[16]
  request.r(i755[17], i755[18], 0, i754, 'customSimulationSpace')
  i754.simulationSpeed = i755[19]
  i754.useUnscaledTime = !!i755[20]
  i754.scalingMode = i755[21]
  i754.playOnAwake = !!i755[22]
  i754.maxParticles = i755[23]
  i754.emitterVelocityMode = i755[24]
  i754.stopAction = i755[25]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i756 = root || new pc.MinMaxCurve()
  var i757 = data
  i756.mode = i757[0]
  i756.curveMin = new pc.AnimationCurve( { keys_flow: i757[1] } )
  i756.curveMax = new pc.AnimationCurve( { keys_flow: i757[2] } )
  i756.curveMultiplier = i757[3]
  i756.constantMin = i757[4]
  i756.constantMax = i757[5]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i758 = root || new pc.MinMaxGradient()
  var i759 = data
  i758.mode = i759[0]
  i758.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i759[1], i758.gradientMin)
  i758.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i759[2], i758.gradientMax)
  i758.colorMin = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.colorMax = new pc.Color(i759[7], i759[8], i759[9], i759[10])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i761 = data
  i760.mode = i761[0]
  var i763 = i761[1]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i763[i + 0]) );
  }
  i760.colorKeys = i762
  var i765 = i761[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i765[i + 0]) );
  }
  i760.alphaKeys = i764
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemColorBySpeed()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[1], i766.color)
  i766.range = new pc.Vec2( i767[2], i767[3] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i771 = data
  i770.color = new pc.Color(i771[0], i771[1], i771[2], i771[3])
  i770.time = i771[4]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i775 = data
  i774.alpha = i775[0]
  i774.time = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemColorOverLifetime()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i777[1], i776.color)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemEmitter()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.rateOverTime)
  i778.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.rateOverDistance)
  var i781 = i779[3]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i781[i + 0]) );
  }
  i778.bursts = i780
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemBurst()
  var i785 = data
  i784.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[0], i784.count)
  i784.cycleCount = i785[1]
  i784.minCount = i785[2]
  i784.maxCount = i785[3]
  i784.repeatInterval = i785[4]
  i784.time = i785[5]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemRotationBySpeed()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.separateAxes = !!i787[4]
  i786.range = new pc.Vec2( i787[5], i787[6] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemRotationOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemShape()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.shapeType = i791[1]
  i790.randomDirectionAmount = i791[2]
  i790.sphericalDirectionAmount = i791[3]
  i790.randomPositionAmount = i791[4]
  i790.alignToDirection = !!i791[5]
  i790.radius = i791[6]
  i790.radiusMode = i791[7]
  i790.radiusSpread = i791[8]
  i790.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[9], i790.radiusSpeed)
  i790.radiusThickness = i791[10]
  i790.angle = i791[11]
  i790.length = i791[12]
  i790.boxThickness = new pc.Vec3( i791[13], i791[14], i791[15] )
  i790.meshShapeType = i791[16]
  request.r(i791[17], i791[18], 0, i790, 'mesh')
  request.r(i791[19], i791[20], 0, i790, 'meshRenderer')
  request.r(i791[21], i791[22], 0, i790, 'skinnedMeshRenderer')
  i790.useMeshMaterialIndex = !!i791[23]
  i790.meshMaterialIndex = i791[24]
  i790.useMeshColors = !!i791[25]
  i790.normalOffset = i791[26]
  i790.arc = i791[27]
  i790.arcMode = i791[28]
  i790.arcSpread = i791[29]
  i790.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[30], i790.arcSpeed)
  i790.donutRadius = i791[31]
  i790.position = new pc.Vec3( i791[32], i791[33], i791[34] )
  i790.rotation = new pc.Vec3( i791[35], i791[36], i791[37] )
  i790.scale = new pc.Vec3( i791[38], i791[39], i791[40] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemSizeBySpeed()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  i792.range = new pc.Vec2( i793[5], i793[6] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemSizeOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.mode = i797[1]
  i796.animation = i797[2]
  i796.numTilesX = i797[3]
  i796.numTilesY = i797[4]
  i796.useRandomRow = !!i797[5]
  i796.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[6], i796.frameOverTime)
  i796.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[7], i796.startFrame)
  i796.cycleCount = i797[8]
  i796.rowIndex = i797[9]
  i796.flipU = i797[10]
  i796.flipV = i797[11]
  i796.spriteCount = i797[12]
  var i799 = i797[13]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.sprites = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.radial)
  i802.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[5], i802.speedModifier)
  i802.space = i803[6]
  i802.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.orbitalX)
  i802.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[8], i802.orbitalY)
  i802.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.orbitalZ)
  i802.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[10], i802.orbitalOffsetX)
  i802.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[11], i802.orbitalOffsetY)
  i802.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[12], i802.orbitalOffsetZ)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemNoise()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.separateAxes = !!i805[1]
  i804.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.strengthX)
  i804.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.strengthY)
  i804.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.strengthZ)
  i804.frequency = i805[5]
  i804.damping = !!i805[6]
  i804.octaveCount = i805[7]
  i804.octaveMultiplier = i805[8]
  i804.octaveScale = i805[9]
  i804.quality = i805[10]
  i804.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[11], i804.scrollSpeed)
  i804.scrollSpeedMultiplier = i805[12]
  i804.remapEnabled = !!i805[13]
  i804.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[14], i804.remapX)
  i804.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[15], i804.remapY)
  i804.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[16], i804.remapZ)
  i804.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[17], i804.positionAmount)
  i804.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[18], i804.rotationAmount)
  i804.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[19], i804.sizeAmount)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemInheritVelocity()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.mode = i807[1]
  i806.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.curve)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemForceOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.space = i809[4]
  i808.randomized = !!i809[5]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.limit)
  i810.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.limitX)
  i810.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.limitY)
  i810.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.limitZ)
  i810.dampen = i811[5]
  i810.separateAxes = !!i811[6]
  i810.space = i811[7]
  i810.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[8], i810.drag)
  i810.multiplyDragByParticleSize = !!i811[9]
  i810.multiplyDragByParticleVelocity = !!i811[10]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i813 = data
  i812.enabled = !!i813[0]
  request.r(i813[1], i813[2], 0, i812, 'sharedMaterial')
  var i815 = i813[3]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sharedMaterials = i814
  i812.receiveShadows = !!i813[4]
  i812.shadowCastingMode = i813[5]
  i812.sortingLayerID = i813[6]
  i812.sortingOrder = i813[7]
  i812.lightmapIndex = i813[8]
  i812.lightmapSceneIndex = i813[9]
  i812.lightmapScaleOffset = new pc.Vec4( i813[10], i813[11], i813[12], i813[13] )
  i812.lightProbeUsage = i813[14]
  i812.reflectionProbeUsage = i813[15]
  request.r(i813[16], i813[17], 0, i812, 'mesh')
  i812.meshCount = i813[18]
  i812.activeVertexStreamsCount = i813[19]
  i812.alignment = i813[20]
  i812.renderMode = i813[21]
  i812.sortMode = i813[22]
  i812.lengthScale = i813[23]
  i812.velocityScale = i813[24]
  i812.cameraVelocityScale = i813[25]
  i812.normalDirection = i813[26]
  i812.sortingFudge = i813[27]
  i812.minParticleSize = i813[28]
  i812.maxParticleSize = i813[29]
  i812.pivot = new pc.Vec3( i813[30], i813[31], i813[32] )
  request.r(i813[33], i813[34], 0, i812, 'trailMaterial')
  return i812
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i818 = root || request.c( 'AutoDestroy' )
  var i819 = data
  i818.delay = i819[0]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i821 = data
  i820.name = i821[0]
  i820.halfPrecision = !!i821[1]
  i820.useUInt32IndexFormat = !!i821[2]
  i820.vertexCount = i821[3]
  i820.aabb = i821[4]
  var i823 = i821[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( !!i823[i + 0] );
  }
  i820.streams = i822
  i820.vertices = i821[6]
  var i825 = i821[7]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i825[i + 0]) );
  }
  i820.subMeshes = i824
  var i827 = i821[8]
  var i826 = []
  for(var i = 0; i < i827.length; i += 16) {
    i826.push( new pc.Mat4().setData(i827[i + 0], i827[i + 1], i827[i + 2], i827[i + 3],  i827[i + 4], i827[i + 5], i827[i + 6], i827[i + 7],  i827[i + 8], i827[i + 9], i827[i + 10], i827[i + 11],  i827[i + 12], i827[i + 13], i827[i + 14], i827[i + 15]) );
  }
  i820.bindposes = i826
  var i829 = i821[9]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i829[i + 0]) );
  }
  i820.blendShapes = i828
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i835 = data
  i834.triangles = i835[0]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i841 = data
  i840.name = i841[0]
  var i843 = i841[1]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i843[i + 0]) );
  }
  i840.frames = i842
  return i840
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i844 = root || request.c( 'ObjectPool' )
  var i845 = data
  i844.startupPoolMode = i845[0]
  var i847 = i845[1]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('ObjectPool+StartupPool', i847[i + 0]) );
  }
  i844.startupPools = i846
  return i844
}

Deserializers["ObjectPool+StartupPool"] = function (request, data, root) {
  var i850 = root || request.c( 'ObjectPool+StartupPool' )
  var i851 = data
  i850.size = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'prefab')
  return i850
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i852 = root || request.c( 'AudioManager' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'win')
  request.r(i853[2], i853[3], 0, i852, 'contifie')
  request.r(i853[4], i853[5], 0, i852, 'broken')
  request.r(i853[6], i853[7], 0, i852, 'winui')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i855 = data
  i854.enabled = !!i855[0]
  request.r(i855[1], i855[2], 0, i854, 'sharedMaterial')
  var i857 = i855[3]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.sharedMaterials = i856
  i854.receiveShadows = !!i855[4]
  i854.shadowCastingMode = i855[5]
  i854.sortingLayerID = i855[6]
  i854.sortingOrder = i855[7]
  i854.lightmapIndex = i855[8]
  i854.lightmapSceneIndex = i855[9]
  i854.lightmapScaleOffset = new pc.Vec4( i855[10], i855[11], i855[12], i855[13] )
  i854.lightProbeUsage = i855[14]
  i854.reflectionProbeUsage = i855[15]
  i854.color = new pc.Color(i855[16], i855[17], i855[18], i855[19])
  request.r(i855[20], i855[21], 0, i854, 'sprite')
  i854.flipX = !!i855[22]
  i854.flipY = !!i855[23]
  i854.drawMode = i855[24]
  i854.size = new pc.Vec2( i855[25], i855[26] )
  i854.tileMode = i855[27]
  i854.adaptiveModeThreshold = i855[28]
  i854.maskInteraction = i855[29]
  i854.spriteSortPoint = i855[30]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i859 = data
  i858.radius = i859[0]
  i858.enabled = !!i859[1]
  i858.isTrigger = !!i859[2]
  i858.usedByEffector = !!i859[3]
  i858.density = i859[4]
  i858.offset = new pc.Vec2( i859[5], i859[6] )
  request.r(i859[7], i859[8], 0, i858, 'material')
  return i858
}

Deserializers["Saw"] = function (request, data, root) {
  var i860 = root || request.c( 'Saw' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'visualTrans')
  request.r(i861[2], i861[3], 0, i860, 'graphic')
  request.r(i861[4], i861[5], 0, i860, 'animation')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'sharedMesh')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'additionalVertexStreams')
  i864.enabled = !!i865[2]
  request.r(i865[3], i865[4], 0, i864, 'sharedMaterial')
  var i867 = i865[5]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.sharedMaterials = i866
  i864.receiveShadows = !!i865[6]
  i864.shadowCastingMode = i865[7]
  i864.sortingLayerID = i865[8]
  i864.sortingOrder = i865[9]
  i864.lightmapIndex = i865[10]
  i864.lightmapSceneIndex = i865[11]
  i864.lightmapScaleOffset = new pc.Vec4( i865[12], i865[13], i865[14], i865[15] )
  i864.lightProbeUsage = i865[16]
  i864.reflectionProbeUsage = i865[17]
  return i864
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i868 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i869 = data
  i868.loop = !!i869[0]
  i868.timeScale = i869[1]
  request.r(i869[2], i869[3], 0, i868, 'skeletonDataAsset')
  i868.initialSkinName = i869[4]
  i868.fixPrefabOverrideViaMeshFilter = i869[5]
  i868.initialFlipX = !!i869[6]
  i868.initialFlipY = !!i869[7]
  i868.updateWhenInvisible = i869[8]
  i868.zSpacing = i869[9]
  i868.useClipping = !!i869[10]
  i868.immutableTriangles = !!i869[11]
  i868.pmaVertexColors = !!i869[12]
  i868.clearStateOnDisable = !!i869[13]
  i868.tintBlack = !!i869[14]
  i868.singleSubmesh = !!i869[15]
  i868.fixDrawOrder = !!i869[16]
  i868.addNormals = !!i869[17]
  i868.calculateTangents = !!i869[18]
  i868.maskInteraction = i869[19]
  i868.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i869[20], i868.maskMaterials)
  i868.disableRenderingOnOverride = !!i869[21]
  i868.updateTiming = i869[22]
  i868.unscaledTime = !!i869[23]
  i868._animationName = i869[24]
  var i871 = i869[25]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.separatorSlotNames = i870
  i868.physicsPositionInheritanceFactor = new pc.Vec2( i869[26], i869[27] )
  i868.physicsRotationInheritanceFactor = i869[28]
  request.r(i869[29], i869[30], 0, i868, 'physicsMovementRelativeTo')
  return i868
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i872 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.materialsMaskDisabled = i874
  var i877 = i873[1]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i872.materialsInsideMask = i876
  var i879 = i873[2]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i872.materialsOutsideMask = i878
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i883 = data
  i882.name = i883[0]
  i882.atlasId = i883[1]
  i882.mipmapCount = i883[2]
  i882.hdr = !!i883[3]
  i882.size = i883[4]
  i882.anisoLevel = i883[5]
  i882.filterMode = i883[6]
  var i885 = i883[7]
  var i884 = []
  for(var i = 0; i < i885.length; i += 4) {
    i884.push( UnityEngine.Rect.MinMaxRect(i885[i + 0], i885[i + 1], i885[i + 2], i885[i + 3]) );
  }
  i882.rects = i884
  i882.wrapU = i883[8]
  i882.wrapV = i883[9]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i889 = data
  i888.name = i889[0]
  i888.index = i889[1]
  i888.startup = !!i889[2]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i891 = data
  i890.enabled = !!i891[0]
  i890.aspect = i891[1]
  i890.orthographic = !!i891[2]
  i890.orthographicSize = i891[3]
  i890.backgroundColor = new pc.Color(i891[4], i891[5], i891[6], i891[7])
  i890.nearClipPlane = i891[8]
  i890.farClipPlane = i891[9]
  i890.fieldOfView = i891[10]
  i890.depth = i891[11]
  i890.clearFlags = i891[12]
  i890.cullingMask = i891[13]
  i890.rect = i891[14]
  request.r(i891[15], i891[16], 0, i890, 'targetTexture')
  i890.usePhysicalProperties = !!i891[17]
  i890.focalLength = i891[18]
  i890.sensorSize = new pc.Vec2( i891[19], i891[20] )
  i890.lensShift = new pc.Vec2( i891[21], i891[22] )
  i890.gateFit = i891[23]
  return i890
}

Deserializers["CameraDistanceConfig"] = function (request, data, root) {
  var i892 = root || request.c( 'CameraDistanceConfig' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'mainCamera')
  var i895 = i893[2]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('ConfigCameraSize')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('ConfigCameraSize', i895[i + 0]));
  }
  i892.configCameraSizes = i894
  return i892
}

Deserializers["ConfigCameraSize"] = function (request, data, root) {
  var i898 = root || request.c( 'ConfigCameraSize' )
  var i899 = data
  i898.ratio = i899[0]
  i898.size = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i901 = data
  i900.enabled = !!i901[0]
  i900.type = i901[1]
  i900.color = new pc.Color(i901[2], i901[3], i901[4], i901[5])
  i900.cullingMask = i901[6]
  i900.intensity = i901[7]
  i900.range = i901[8]
  i900.spotAngle = i901[9]
  i900.shadows = i901[10]
  i900.shadowNormalBias = i901[11]
  i900.shadowBias = i901[12]
  i900.shadowStrength = i901[13]
  i900.shadowResolution = i901[14]
  i900.lightmapBakeType = i901[15]
  i900.renderMode = i901[16]
  request.r(i901[17], i901[18], 0, i900, 'cookie')
  i900.cookieSize = i901[19]
  return i900
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_FirstSelected')
  i902.m_sendNavigationEvents = !!i903[2]
  i902.m_DragThreshold = i903[3]
  return i902
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i905 = data
  i904.m_HorizontalAxis = i905[0]
  i904.m_VerticalAxis = i905[1]
  i904.m_SubmitButton = i905[2]
  i904.m_CancelButton = i905[3]
  i904.m_InputActionsPerSecond = i905[4]
  i904.m_RepeatDelay = i905[5]
  i904.m_ForceModuleActive = !!i905[6]
  i904.m_SendPointerHoverToParent = !!i905[7]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i907 = data
  i906.pivot = new pc.Vec2( i907[0], i907[1] )
  i906.anchorMin = new pc.Vec2( i907[2], i907[3] )
  i906.anchorMax = new pc.Vec2( i907[4], i907[5] )
  i906.sizeDelta = new pc.Vec2( i907[6], i907[7] )
  i906.anchoredPosition3D = new pc.Vec3( i907[8], i907[9], i907[10] )
  i906.rotation = new pc.Quat(i907[11], i907[12], i907[13], i907[14])
  i906.scale = new pc.Vec3( i907[15], i907[16], i907[17] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i909 = data
  i908.enabled = !!i909[0]
  i908.planeDistance = i909[1]
  i908.referencePixelsPerUnit = i909[2]
  i908.isFallbackOverlay = !!i909[3]
  i908.renderMode = i909[4]
  i908.renderOrder = i909[5]
  i908.sortingLayerName = i909[6]
  i908.sortingOrder = i909[7]
  i908.scaleFactor = i909[8]
  request.r(i909[9], i909[10], 0, i908, 'worldCamera')
  i908.overrideSorting = !!i909[11]
  i908.pixelPerfect = !!i909[12]
  i908.targetDisplay = i909[13]
  i908.overridePixelPerfect = !!i909[14]
  return i908
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i911 = data
  i910.m_UiScaleMode = i911[0]
  i910.m_ReferencePixelsPerUnit = i911[1]
  i910.m_ScaleFactor = i911[2]
  i910.m_ReferenceResolution = new pc.Vec2( i911[3], i911[4] )
  i910.m_ScreenMatchMode = i911[5]
  i910.m_MatchWidthOrHeight = i911[6]
  i910.m_PhysicalUnit = i911[7]
  i910.m_FallbackScreenDPI = i911[8]
  i910.m_DefaultSpriteDPI = i911[9]
  i910.m_DynamicPixelsPerUnit = i911[10]
  i910.m_PresetInfoIsWorld = !!i911[11]
  return i910
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i913 = data
  i912.m_IgnoreReversedGraphics = !!i913[0]
  i912.m_BlockingObjects = i913[1]
  i912.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i913[2] )
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i915 = data
  i914.cullTransparentMesh = !!i915[0]
  return i914
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Image' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_Sprite')
  i916.m_Type = i917[2]
  i916.m_PreserveAspect = !!i917[3]
  i916.m_FillCenter = !!i917[4]
  i916.m_FillMethod = i917[5]
  i916.m_FillAmount = i917[6]
  i916.m_FillClockwise = !!i917[7]
  i916.m_FillOrigin = i917[8]
  i916.m_UseSpriteMesh = !!i917[9]
  i916.m_PixelsPerUnitMultiplier = i917[10]
  request.r(i917[11], i917[12], 0, i916, 'm_Material')
  i916.m_Maskable = !!i917[13]
  i916.m_Color = new pc.Color(i917[14], i917[15], i917[16], i917[17])
  i916.m_RaycastTarget = !!i917[18]
  i916.m_RaycastPadding = new pc.Vec4( i917[19], i917[20], i917[21], i917[22] )
  return i916
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.Button' )
  var i919 = data
  i918.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i919[0], i918.m_OnClick)
  i918.m_Navigation = request.d('UnityEngine.UI.Navigation', i919[1], i918.m_Navigation)
  i918.m_Transition = i919[2]
  i918.m_Colors = request.d('UnityEngine.UI.ColorBlock', i919[3], i918.m_Colors)
  i918.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i919[4], i918.m_SpriteState)
  i918.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i919[5], i918.m_AnimationTriggers)
  i918.m_Interactable = !!i919[6]
  request.r(i919[7], i919[8], 0, i918, 'm_TargetGraphic')
  return i918
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i921 = data
  i920.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i921[0], i920.m_PersistentCalls)
  return i920
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i923 = data
  var i925 = i923[0]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('UnityEngine.Events.PersistentCall', i925[i + 0]));
  }
  i922.m_Calls = i924
  return i922
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'm_Target')
  i928.m_TargetAssemblyTypeName = i929[2]
  i928.m_MethodName = i929[3]
  i928.m_Mode = i929[4]
  i928.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i929[5], i928.m_Arguments)
  i928.m_CallState = i929[6]
  return i928
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_ObjectArgument')
  i930.m_ObjectArgumentAssemblyTypeName = i931[2]
  i930.m_IntArgument = i931[3]
  i930.m_FloatArgument = i931[4]
  i930.m_StringArgument = i931[5]
  i930.m_BoolArgument = !!i931[6]
  return i930
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i933 = data
  i932.m_Mode = i933[0]
  i932.m_WrapAround = !!i933[1]
  request.r(i933[2], i933[3], 0, i932, 'm_SelectOnUp')
  request.r(i933[4], i933[5], 0, i932, 'm_SelectOnDown')
  request.r(i933[6], i933[7], 0, i932, 'm_SelectOnLeft')
  request.r(i933[8], i933[9], 0, i932, 'm_SelectOnRight')
  return i932
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i935 = data
  i934.m_NormalColor = new pc.Color(i935[0], i935[1], i935[2], i935[3])
  i934.m_HighlightedColor = new pc.Color(i935[4], i935[5], i935[6], i935[7])
  i934.m_PressedColor = new pc.Color(i935[8], i935[9], i935[10], i935[11])
  i934.m_SelectedColor = new pc.Color(i935[12], i935[13], i935[14], i935[15])
  i934.m_DisabledColor = new pc.Color(i935[16], i935[17], i935[18], i935[19])
  i934.m_ColorMultiplier = i935[20]
  i934.m_FadeDuration = i935[21]
  return i934
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'm_HighlightedSprite')
  request.r(i937[2], i937[3], 0, i936, 'm_PressedSprite')
  request.r(i937[4], i937[5], 0, i936, 'm_SelectedSprite')
  request.r(i937[6], i937[7], 0, i936, 'm_DisabledSprite')
  return i936
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i939 = data
  i938.m_NormalTrigger = i939[0]
  i938.m_HighlightedTrigger = i939[1]
  i938.m_PressedTrigger = i939[2]
  i938.m_SelectedTrigger = i939[3]
  i938.m_DisabledTrigger = i939[4]
  return i938
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.Text' )
  var i941 = data
  i940.m_FontData = request.d('UnityEngine.UI.FontData', i941[0], i940.m_FontData)
  i940.m_Text = i941[1]
  request.r(i941[2], i941[3], 0, i940, 'm_Material')
  i940.m_Maskable = !!i941[4]
  i940.m_Color = new pc.Color(i941[5], i941[6], i941[7], i941[8])
  i940.m_RaycastTarget = !!i941[9]
  i940.m_RaycastPadding = new pc.Vec4( i941[10], i941[11], i941[12], i941[13] )
  return i940
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.FontData' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_Font')
  i942.m_FontSize = i943[2]
  i942.m_FontStyle = i943[3]
  i942.m_BestFit = !!i943[4]
  i942.m_MinSize = i943[5]
  i942.m_MaxSize = i943[6]
  i942.m_Alignment = i943[7]
  i942.m_AlignByGeometry = !!i943[8]
  i942.m_RichText = !!i943[9]
  i942.m_HorizontalOverflow = i943[10]
  i942.m_VerticalOverflow = i943[11]
  i942.m_LineSpacing = i943[12]
  return i942
}

Deserializers["IngameTutorial"] = function (request, data, root) {
  var i944 = root || request.c( 'IngameTutorial' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'tutorialRect')
  return i944
}

Deserializers["UIFollowObject"] = function (request, data, root) {
  var i946 = root || request.c( 'UIFollowObject' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'target')
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'animatorController')
  request.r(i949[2], i949[3], 0, i948, 'avatar')
  i948.updateMode = i949[4]
  i948.hasTransformHierarchy = !!i949[5]
  i948.applyRootMotion = !!i949[6]
  var i951 = i949[7]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.humanBones = i950
  i948.enabled = !!i949[8]
  return i948
}

Deserializers["Hint"] = function (request, data, root) {
  var i954 = root || request.c( 'Hint' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'targetObject')
  i954.hasClicked = !!i955[2]
  request.r(i955[3], i955[4], 0, i954, 'tutorial')
  return i954
}

Deserializers["GameManager"] = function (request, data, root) {
  var i956 = root || request.c( 'GameManager' )
  var i957 = data
  i956.canControl = !!i957[0]
  request.r(i957[1], i957[2], 0, i956, 'currentLevel')
  i956.layerBolt = UnityEngine.LayerMask.FromIntegerValue( i957[3] )
  i956.layerBar = UnityEngine.LayerMask.FromIntegerValue( i957[4] )
  i956.layerBoardHole = UnityEngine.LayerMask.FromIntegerValue( i957[5] )
  i956.layerBarHole = UnityEngine.LayerMask.FromIntegerValue( i957[6] )
  i956.startTime = i957[7]
  i956.count = i957[8]
  i956.canDestroyOnLoad = !!i957[9]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i959 = data
  i958.usedByComposite = !!i959[0]
  i958.autoTiling = !!i959[1]
  i958.size = new pc.Vec2( i959[2], i959[3] )
  i958.edgeRadius = i959[4]
  i958.enabled = !!i959[5]
  i958.isTrigger = !!i959[6]
  i958.usedByEffector = !!i959[7]
  i958.density = i959[8]
  i958.offset = new pc.Vec2( i959[9], i959[10] )
  request.r(i959[11], i959[12], 0, i958, 'material')
  return i958
}

Deserializers["wall"] = function (request, data, root) {
  var i960 = root || request.c( 'wall' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'exploreParticle')
  return i960
}

Deserializers["LoadEndcard"] = function (request, data, root) {
  var i962 = root || request.c( 'LoadEndcard' )
  var i963 = data
  return i962
}

Deserializers["store"] = function (request, data, root) {
  var i964 = root || request.c( 'store' )
  var i965 = data
  return i964
}

Deserializers["LevelController"] = function (request, data, root) {
  var i966 = root || request.c( 'LevelController' )
  var i967 = data
  i966.numScrewOnBar = i967[0]
  i966.fullSlot = !!i967[1]
  request.r(i967[2], i967[3], 0, i966, 'reset')
  request.r(i967[4], i967[5], 0, i966, 'currentBolt')
  request.r(i967[6], i967[7], 0, i966, 'select')
  request.r(i967[8], i967[9], 0, i966, 'place')
  request.r(i967[10], i967[11], 0, i966, 'confetti')
  i966.isUsingItem = !!i967[12]
  i966.won = !!i967[13]
  request.r(i967[14], i967[15], 0, i966, 'store')
  i966.isLv2 = !!i967[16]
  i966.firstTouch = !!i967[17]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i969 = data
  i968.enabled = !!i969[0]
  i968.sortingLayerIndex = i969[1]
  i968.sortingOrder = i969[2]
  i968.sortingLayerName = i969[3]
  return i968
}

Deserializers["BoardHole"] = function (request, data, root) {
  var i970 = root || request.c( 'BoardHole' )
  var i971 = data
  i970.locked = !!i971[0]
  i970.isReward = !!i971[1]
  request.r(i971[2], i971[3], 0, i970, 'lockObj')
  request.r(i971[4], i971[5], 0, i970, 'rewardObj')
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i973 = data
  i972.enabled = !!i973[0]
  request.r(i973[1], i973[2], 0, i972, 'sharedMaterial')
  var i975 = i973[3]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.sharedMaterials = i974
  i972.receiveShadows = !!i973[4]
  i972.shadowCastingMode = i973[5]
  i972.sortingLayerID = i973[6]
  i972.sortingOrder = i973[7]
  i972.lightmapIndex = i973[8]
  i972.lightmapSceneIndex = i973[9]
  i972.lightmapScaleOffset = new pc.Vec4( i973[10], i973[11], i973[12], i973[13] )
  i972.lightProbeUsage = i973[14]
  i972.reflectionProbeUsage = i973[15]
  i972.frontSortingLayerID = i973[16]
  i972.frontSortingOrder = i973[17]
  i972.backSortingLayerID = i973[18]
  i972.backSortingOrder = i973[19]
  i972.alphaCutoff = i973[20]
  request.r(i973[21], i973[22], 0, i972, 'sprite')
  i972.tileMode = i973[23]
  i972.isCustomRangeActive = !!i973[24]
  i972.spriteSortPoint = i973[25]
  return i972
}

Deserializers["Bar"] = function (request, data, root) {
  var i976 = root || request.c( 'Bar' )
  var i977 = data
  i976.configCenterOfMass = !!i977[0]
  i976.minusgravity = !!i977[1]
  i976.centerOfMass = new pc.Vec3( i977[2], i977[3], i977[4] )
  var i979 = i977[5]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('Bolt')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.bolts = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i983 = data
  i982.enabled = !!i983[0]
  i982.isTrigger = !!i983[1]
  i982.usedByEffector = !!i983[2]
  i982.density = i983[3]
  i982.offset = new pc.Vec2( i983[4], i983[5] )
  request.r(i983[6], i983[7], 0, i982, 'material')
  i982.usedByComposite = !!i983[8]
  i982.autoTiling = !!i983[9]
  var i985 = i983[10]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
  var i987 = i985[i + 0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
    i986.push( new pc.Vec2( i987[i + 0], i987[i + 1] ) );
  }
    i984.push( i986 );
  }
  i982.points = i984
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i995 = data
  i994.bodyType = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'material')
  i994.simulated = !!i995[3]
  i994.useAutoMass = !!i995[4]
  i994.mass = i995[5]
  i994.drag = i995[6]
  i994.angularDrag = i995[7]
  i994.gravityScale = i995[8]
  i994.collisionDetectionMode = i995[9]
  i994.sleepMode = i995[10]
  i994.constraints = i995[11]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i997 = data
  i996.anchor = new pc.Vec2( i997[0], i997[1] )
  i996.connectedAnchor = new pc.Vec2( i997[2], i997[3] )
  i996.autoConfigureConnectedAnchor = !!i997[4]
  i996.enabled = !!i997[5]
  i996.useLimits = !!i997[6]
  i996.limits = request.d('UnityEngine.JointAngleLimits2D', i997[7], i996.limits)
  i996.useMotor = !!i997[8]
  i996.motor = request.d('UnityEngine.JointMotor2D', i997[9], i996.motor)
  request.r(i997[10], i997[11], 0, i996, 'connectedBody')
  i996.breakForce = i997[12]
  i996.breakTorque = i997[13]
  i996.enableCollision = !!i997[14]
  return i996
}

Deserializers["BarHole"] = function (request, data, root) {
  var i998 = root || request.c( 'BarHole' )
  var i999 = data
  return i998
}

Deserializers["Bolt"] = function (request, data, root) {
  var i1000 = root || request.c( 'Bolt' )
  var i1001 = data
  i1000.isFallingScrew = !!i1001[0]
  i1000.screwBoard = !!i1001[1]
  request.r(i1001[2], i1001[3], 0, i1000, 'hand1')
  request.r(i1001[4], i1001[5], 0, i1000, 'hand1portrait')
  request.r(i1001[6], i1001[7], 0, i1000, 'hand2')
  request.r(i1001[8], i1001[9], 0, i1000, 'handlandscape')
  request.r(i1001[10], i1001[11], 0, i1000, 'tutorial2')
  request.r(i1001[12], i1001[13], 0, i1000, 'oldspr')
  request.r(i1001[14], i1001[15], 0, i1000, 'newspr')
  i1000.isScrewed = !!i1001[16]
  i1000.locked = !!i1001[17]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1003 = data
  i1002.ambientIntensity = i1003[0]
  i1002.reflectionIntensity = i1003[1]
  i1002.ambientMode = i1003[2]
  i1002.ambientLight = new pc.Color(i1003[3], i1003[4], i1003[5], i1003[6])
  i1002.ambientSkyColor = new pc.Color(i1003[7], i1003[8], i1003[9], i1003[10])
  i1002.ambientGroundColor = new pc.Color(i1003[11], i1003[12], i1003[13], i1003[14])
  i1002.ambientEquatorColor = new pc.Color(i1003[15], i1003[16], i1003[17], i1003[18])
  i1002.fogColor = new pc.Color(i1003[19], i1003[20], i1003[21], i1003[22])
  i1002.fogEndDistance = i1003[23]
  i1002.fogStartDistance = i1003[24]
  i1002.fogDensity = i1003[25]
  i1002.fog = !!i1003[26]
  request.r(i1003[27], i1003[28], 0, i1002, 'skybox')
  i1002.fogMode = i1003[29]
  var i1005 = i1003[30]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1005[i + 0]) );
  }
  i1002.lightmaps = i1004
  i1002.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1003[31], i1002.lightProbes)
  i1002.lightmapsMode = i1003[32]
  i1002.mixedBakeMode = i1003[33]
  i1002.environmentLightingMode = i1003[34]
  i1002.ambientProbe = new pc.SphericalHarmonicsL2(i1003[35])
  i1002.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1003[36])
  i1002.useReferenceAmbientProbe = !!i1003[37]
  request.r(i1003[38], i1003[39], 0, i1002, 'customReflection')
  request.r(i1003[40], i1003[41], 0, i1002, 'defaultReflection')
  i1002.defaultReflectionMode = i1003[42]
  i1002.defaultReflectionResolution = i1003[43]
  i1002.sunLightObjectId = i1003[44]
  i1002.pixelLightCount = i1003[45]
  i1002.defaultReflectionHDR = !!i1003[46]
  i1002.hasLightDataAsset = !!i1003[47]
  i1002.hasManualGenerate = !!i1003[48]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'lightmapColor')
  request.r(i1009[2], i1009[3], 0, i1008, 'lightmapDirection')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1010 = root || new UnityEngine.LightProbes()
  var i1011 = data
  return i1010
}

Deserializers["Key"] = function (request, data, root) {
  var i1018 = root || request.c( 'Key' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'getItem')
  request.r(i1019[2], i1019[3], 0, i1018, 'bolt')
  request.r(i1019[4], i1019[5], 0, i1018, 'boardHole')
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.bounciness = i1021[1]
  i1020.friction = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1025[i + 0]));
  }
  i1022.ShaderCompilationErrors = i1024
  i1022.name = i1023[1]
  i1022.guid = i1023[2]
  var i1027 = i1023[3]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1022.shaderDefinedKeywords = i1026
  var i1029 = i1023[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1029[i + 0]) );
  }
  i1022.passes = i1028
  var i1031 = i1023[5]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1031[i + 0]) );
  }
  i1022.usePasses = i1030
  var i1033 = i1023[6]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1033[i + 0]) );
  }
  i1022.defaultParameterValues = i1032
  request.r(i1023[7], i1023[8], 0, i1022, 'unityFallbackShader')
  i1022.readDepth = !!i1023[9]
  i1022.isCreatedByShaderGraph = !!i1023[10]
  i1022.usedBatchUniforms = i1023[11]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1037 = data
  i1036.shaderName = i1037[0]
  i1036.errorMessage = i1037[1]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1040 = root || new pc.UnityShaderPass()
  var i1041 = data
  i1040.id = i1041[0]
  i1040.subShaderIndex = i1041[1]
  i1040.name = i1041[2]
  i1040.passType = i1041[3]
  i1040.grabPassTextureName = i1041[4]
  i1040.usePass = !!i1041[5]
  i1040.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[6], i1040.zTest)
  i1040.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[7], i1040.zWrite)
  i1040.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[8], i1040.culling)
  i1040.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1041[9], i1040.blending)
  i1040.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1041[10], i1040.alphaBlending)
  i1040.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[11], i1040.colorWriteMask)
  i1040.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[12], i1040.offsetUnits)
  i1040.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[13], i1040.offsetFactor)
  i1040.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[14], i1040.stencilRef)
  i1040.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[15], i1040.stencilReadMask)
  i1040.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[16], i1040.stencilWriteMask)
  i1040.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[17], i1040.stencilOp)
  i1040.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[18], i1040.stencilOpFront)
  i1040.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[19], i1040.stencilOpBack)
  var i1043 = i1041[20]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1043[i + 0]) );
  }
  i1040.tags = i1042
  var i1045 = i1041[21]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1040.passDefinedKeywords = i1044
  var i1047 = i1041[22]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1047[i + 0]) );
  }
  i1040.passDefinedKeywordGroups = i1046
  var i1049 = i1041[23]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1049[i + 0]) );
  }
  i1040.variants = i1048
  var i1051 = i1041[24]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1051[i + 0]) );
  }
  i1040.excludedVariants = i1050
  i1040.hasDepthReader = !!i1041[25]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1053 = data
  i1052.val = i1053[0]
  i1052.name = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1055 = data
  i1054.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[0], i1054.src)
  i1054.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[1], i1054.dst)
  i1054.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[2], i1054.op)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1057 = data
  i1056.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[0], i1056.pass)
  i1056.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[1], i1056.fail)
  i1056.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[2], i1056.zFail)
  i1056.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[3], i1056.comp)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.value = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1064.keywords = i1066
  i1064.hasDiscard = !!i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1071 = data
  i1070.passId = i1071[0]
  i1070.subShaderIndex = i1071[1]
  var i1073 = i1071[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( i1073[i + 0] );
  }
  i1070.keywords = i1072
  i1070.vertexProgram = i1071[3]
  i1070.fragmentProgram = i1071[4]
  i1070.compiledForWebGL2 = !!i1071[5]
  i1070.readDepth = !!i1071[6]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'shader')
  i1076.pass = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.type = i1081[1]
  i1080.value = new pc.Vec4( i1081[2], i1081[3], i1081[4], i1081[5] )
  i1080.textureValue = i1081[6]
  i1080.shaderPropertyFlag = i1081[7]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1083 = data
  i1082.name = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'texture')
  i1082.aabb = i1083[3]
  i1082.vertices = i1083[4]
  i1082.triangles = i1083[5]
  i1082.textureRect = UnityEngine.Rect.MinMaxRect(i1083[6], i1083[7], i1083[8], i1083[9])
  i1082.packedRect = UnityEngine.Rect.MinMaxRect(i1083[10], i1083[11], i1083[12], i1083[13])
  i1082.border = new pc.Vec4( i1083[14], i1083[15], i1083[16], i1083[17] )
  i1082.transparency = i1083[18]
  i1082.bounds = i1083[19]
  i1082.pixelsPerUnit = i1083[20]
  i1082.textureWidth = i1083[21]
  i1082.textureHeight = i1083[22]
  i1082.nativeSize = new pc.Vec2( i1083[23], i1083[24] )
  i1082.pivot = new pc.Vec2( i1083[25], i1083[26] )
  i1082.textureRectOffset = new pc.Vec2( i1083[27], i1083[28] )
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1085 = data
  i1084.name = i1085[0]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.wrapMode = i1087[1]
  i1086.isLooping = !!i1087[2]
  i1086.length = i1087[3]
  var i1089 = i1087[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1089[i + 0]) );
  }
  i1086.curves = i1088
  var i1091 = i1087[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1091[i + 0]) );
  }
  i1086.events = i1090
  i1086.halfPrecision = !!i1087[6]
  i1086._frameRate = i1087[7]
  i1086.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1087[8], i1086.localBounds)
  i1086.hasMuscleCurves = !!i1087[9]
  var i1093 = i1087[10]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1086.clipMuscleConstant = i1092
  i1086.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1087[11], i1086.clipBindingConstant)
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1097 = data
  i1096.path = i1097[0]
  i1096.hash = i1097[1]
  i1096.componentType = i1097[2]
  i1096.property = i1097[3]
  i1096.keys = i1097[4]
  var i1099 = i1097[5]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1099[i + 0]) );
  }
  i1096.objectReferenceKeys = i1098
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1103 = data
  i1102.time = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'value')
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1107 = data
  i1106.functionName = i1107[0]
  i1106.floatParameter = i1107[1]
  i1106.intParameter = i1107[2]
  i1106.stringParameter = i1107[3]
  request.r(i1107[4], i1107[5], 0, i1106, 'objectReferenceParameter')
  i1106.time = i1107[6]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1109 = data
  i1108.center = new pc.Vec3( i1109[0], i1109[1], i1109[2] )
  i1108.extends = new pc.Vec3( i1109[3], i1109[4], i1109[5] )
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1112.genericBindings = i1114
  var i1117 = i1113[1]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1112.pptrCurveMapping = i1116
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.ascent = i1119[1]
  i1118.originalLineHeight = i1119[2]
  i1118.fontSize = i1119[3]
  var i1121 = i1119[4]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1121[i + 0]) );
  }
  i1118.characterInfo = i1120
  request.r(i1119[5], i1119[6], 0, i1118, 'texture')
  i1118.originalFontSize = i1119[7]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1125 = data
  i1124.index = i1125[0]
  i1124.advance = i1125[1]
  i1124.bearing = i1125[2]
  i1124.glyphWidth = i1125[3]
  i1124.glyphHeight = i1125[4]
  i1124.minX = i1125[5]
  i1124.maxX = i1125[6]
  i1124.minY = i1125[7]
  i1124.maxY = i1125[8]
  i1124.uvBottomLeftX = i1125[9]
  i1124.uvBottomLeftY = i1125[10]
  i1124.uvBottomRightX = i1125[11]
  i1124.uvBottomRightY = i1125[12]
  i1124.uvTopLeftX = i1125[13]
  i1124.uvTopLeftY = i1125[14]
  i1124.uvTopRightX = i1125[15]
  i1124.uvTopRightY = i1125[16]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1127 = data
  i1126.name = i1127[0]
  var i1129 = i1127[1]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1129[i + 0]) );
  }
  i1126.layers = i1128
  var i1131 = i1127[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1131[i + 0]) );
  }
  i1126.parameters = i1130
  i1126.animationClips = i1127[3]
  i1126.avatarUnsupported = i1127[4]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.defaultWeight = i1135[1]
  i1134.blendingMode = i1135[2]
  i1134.avatarMask = i1135[3]
  i1134.syncedLayerIndex = i1135[4]
  i1134.syncedLayerAffectsTiming = !!i1135[5]
  i1134.syncedLayers = i1135[6]
  i1134.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1135[7], i1134.stateMachine)
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1137 = data
  i1136.id = i1137[0]
  i1136.name = i1137[1]
  i1136.path = i1137[2]
  var i1139 = i1137[3]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1139[i + 0]) );
  }
  i1136.states = i1138
  var i1141 = i1137[4]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1141[i + 0]) );
  }
  i1136.machines = i1140
  var i1143 = i1137[5]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1143[i + 0]) );
  }
  i1136.entryStateTransitions = i1142
  var i1145 = i1137[6]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1145[i + 0]) );
  }
  i1136.exitStateTransitions = i1144
  var i1147 = i1137[7]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1147[i + 0]) );
  }
  i1136.anyStateTransitions = i1146
  i1136.defaultStateId = i1137[8]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1151 = data
  i1150.id = i1151[0]
  i1150.name = i1151[1]
  i1150.cycleOffset = i1151[2]
  i1150.cycleOffsetParameter = i1151[3]
  i1150.cycleOffsetParameterActive = !!i1151[4]
  i1150.mirror = !!i1151[5]
  i1150.mirrorParameter = i1151[6]
  i1150.mirrorParameterActive = !!i1151[7]
  i1150.motionId = i1151[8]
  i1150.nameHash = i1151[9]
  i1150.fullPathHash = i1151[10]
  i1150.speed = i1151[11]
  i1150.speedParameter = i1151[12]
  i1150.speedParameterActive = !!i1151[13]
  i1150.tag = i1151[14]
  i1150.tagHash = i1151[15]
  i1150.writeDefaultValues = !!i1151[16]
  var i1153 = i1151[17]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 2, i1152, '')
  }
  i1150.behaviours = i1152
  var i1155 = i1151[18]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1155[i + 0]) );
  }
  i1150.transitions = i1154
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1161 = data
  i1160.fullPath = i1161[0]
  i1160.canTransitionToSelf = !!i1161[1]
  i1160.duration = i1161[2]
  i1160.exitTime = i1161[3]
  i1160.hasExitTime = !!i1161[4]
  i1160.hasFixedDuration = !!i1161[5]
  i1160.interruptionSource = i1161[6]
  i1160.offset = i1161[7]
  i1160.orderedInterruption = !!i1161[8]
  i1160.destinationStateId = i1161[9]
  i1160.isExit = !!i1161[10]
  i1160.mute = !!i1161[11]
  i1160.solo = !!i1161[12]
  var i1163 = i1161[13]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1163[i + 0]) );
  }
  i1160.conditions = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1169 = data
  i1168.destinationStateId = i1169[0]
  i1168.isExit = !!i1169[1]
  i1168.mute = !!i1169[2]
  i1168.solo = !!i1169[3]
  var i1171 = i1169[4]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1171[i + 0]) );
  }
  i1168.conditions = i1170
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1175 = data
  i1174.defaultBool = !!i1175[0]
  i1174.defaultFloat = i1175[1]
  i1174.defaultInt = i1175[2]
  i1174.name = i1175[3]
  i1174.nameHash = i1175[4]
  i1174.type = i1175[5]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.bytes64 = i1177[1]
  i1176.data = i1177[2]
  return i1176
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1178 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1179 = data
  var i1181 = i1179[0]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 2) {
  request.r(i1181[i + 0], i1181[i + 1], 2, i1180, '')
  }
  i1178.atlasAssets = i1180
  i1178.scale = i1179[1]
  request.r(i1179[2], i1179[3], 0, i1178, 'skeletonJSON')
  i1178.isUpgradingBlendModeMaterials = !!i1179[4]
  i1178.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1179[5], i1178.blendModeMaterials)
  var i1183 = i1179[6]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1178.skeletonDataModifiers = i1182
  var i1185 = i1179[7]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( i1185[i + 0] );
  }
  i1178.fromAnimation = i1184
  var i1187 = i1179[8]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( i1187[i + 0] );
  }
  i1178.toAnimation = i1186
  i1178.duration = i1179[9]
  i1178.defaultMix = i1179[10]
  request.r(i1179[11], i1179[12], 0, i1178, 'controller')
  return i1178
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1190 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1191 = data
  i1190.applyAdditiveMaterial = !!i1191[0]
  var i1193 = i1191[1]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1193[i + 0]));
  }
  i1190.additiveMaterials = i1192
  var i1195 = i1191[2]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1195[i + 0]));
  }
  i1190.multiplyMaterials = i1194
  var i1197 = i1191[3]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1197[i + 0]));
  }
  i1190.screenMaterials = i1196
  i1190.requiresBlendModeMaterials = !!i1191[4]
  return i1190
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1200 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1201 = data
  i1200.pageName = i1201[0]
  request.r(i1201[1], i1201[2], 0, i1200, 'material')
  return i1200
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1204 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'atlasFile')
  var i1207 = i1205[2]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 2, i1206, '')
  }
  i1204.materials = i1206
  i1204.textureLoadingMode = i1205[3]
  request.r(i1205[4], i1205[5], 0, i1204, 'onDemandTextureLoader')
  return i1204
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1209 = data
  i1208.hashCode = i1209[0]
  request.r(i1209[1], i1209[2], 0, i1208, 'material')
  i1208.materialHashCode = i1209[3]
  request.r(i1209[4], i1209[5], 0, i1208, 'atlas')
  i1208.normalStyle = i1209[6]
  i1208.normalSpacingOffset = i1209[7]
  i1208.boldStyle = i1209[8]
  i1208.boldSpacing = i1209[9]
  i1208.italicStyle = i1209[10]
  i1208.tabSize = i1209[11]
  i1208.m_Version = i1209[12]
  i1208.m_SourceFontFileGUID = i1209[13]
  request.r(i1209[14], i1209[15], 0, i1208, 'm_SourceFontFile_EditorRef')
  request.r(i1209[16], i1209[17], 0, i1208, 'm_SourceFontFile')
  i1208.m_AtlasPopulationMode = i1209[18]
  i1208.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1209[19], i1208.m_FaceInfo)
  var i1211 = i1209[20]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d('UnityEngine.TextCore.Glyph', i1211[i + 0]));
  }
  i1208.m_GlyphTable = i1210
  var i1213 = i1209[21]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_Character', i1213[i + 0]));
  }
  i1208.m_CharacterTable = i1212
  var i1215 = i1209[22]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 2, i1214, '')
  }
  i1208.m_AtlasTextures = i1214
  i1208.m_AtlasTextureIndex = i1209[23]
  i1208.m_IsMultiAtlasTexturesEnabled = !!i1209[24]
  i1208.m_ClearDynamicDataOnBuild = !!i1209[25]
  var i1217 = i1209[26]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('UnityEngine.TextCore.GlyphRect', i1217[i + 0]));
  }
  i1208.m_UsedGlyphRects = i1216
  var i1219 = i1209[27]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('UnityEngine.TextCore.GlyphRect', i1219[i + 0]));
  }
  i1208.m_FreeGlyphRects = i1218
  i1208.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1209[28], i1208.m_fontInfo)
  i1208.m_AtlasWidth = i1209[29]
  i1208.m_AtlasHeight = i1209[30]
  i1208.m_AtlasPadding = i1209[31]
  i1208.m_AtlasRenderMode = i1209[32]
  var i1221 = i1209[33]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('TMPro.TMP_Glyph', i1221[i + 0]));
  }
  i1208.m_glyphInfoList = i1220
  i1208.m_KerningTable = request.d('TMPro.KerningTable', i1209[34], i1208.m_KerningTable)
  i1208.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1209[35], i1208.m_FontFeatureTable)
  var i1223 = i1209[36]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1223.length; i += 2) {
  request.r(i1223[i + 0], i1223[i + 1], 1, i1222, '')
  }
  i1208.fallbackFontAssets = i1222
  var i1225 = i1209[37]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 1, i1224, '')
  }
  i1208.m_FallbackFontAssetTable = i1224
  i1208.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1209[38], i1208.m_CreationSettings)
  var i1227 = i1209[39]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('TMPro.TMP_FontWeightPair', i1227[i + 0]) );
  }
  i1208.m_FontWeightTable = i1226
  var i1229 = i1209[40]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('TMPro.TMP_FontWeightPair', i1229[i + 0]) );
  }
  i1208.fontWeights = i1228
  return i1208
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1231 = data
  i1230.m_FaceIndex = i1231[0]
  i1230.m_FamilyName = i1231[1]
  i1230.m_StyleName = i1231[2]
  i1230.m_PointSize = i1231[3]
  i1230.m_Scale = i1231[4]
  i1230.m_UnitsPerEM = i1231[5]
  i1230.m_LineHeight = i1231[6]
  i1230.m_AscentLine = i1231[7]
  i1230.m_CapLine = i1231[8]
  i1230.m_MeanLine = i1231[9]
  i1230.m_Baseline = i1231[10]
  i1230.m_DescentLine = i1231[11]
  i1230.m_SuperscriptOffset = i1231[12]
  i1230.m_SuperscriptSize = i1231[13]
  i1230.m_SubscriptOffset = i1231[14]
  i1230.m_SubscriptSize = i1231[15]
  i1230.m_UnderlineOffset = i1231[16]
  i1230.m_UnderlineThickness = i1231[17]
  i1230.m_StrikethroughOffset = i1231[18]
  i1230.m_StrikethroughThickness = i1231[19]
  i1230.m_TabWidth = i1231[20]
  return i1230
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1235 = data
  i1234.m_Index = i1235[0]
  i1234.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1235[1], i1234.m_Metrics)
  i1234.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1235[2], i1234.m_GlyphRect)
  i1234.m_Scale = i1235[3]
  i1234.m_AtlasIndex = i1235[4]
  i1234.m_ClassDefinitionType = i1235[5]
  return i1234
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1237 = data
  i1236.m_Width = i1237[0]
  i1236.m_Height = i1237[1]
  i1236.m_HorizontalBearingX = i1237[2]
  i1236.m_HorizontalBearingY = i1237[3]
  i1236.m_HorizontalAdvance = i1237[4]
  return i1236
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1239 = data
  i1238.m_X = i1239[0]
  i1238.m_Y = i1239[1]
  i1238.m_Width = i1239[2]
  i1238.m_Height = i1239[3]
  return i1238
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_Character' )
  var i1243 = data
  i1242.m_ElementType = i1243[0]
  i1242.m_Unicode = i1243[1]
  i1242.m_GlyphIndex = i1243[2]
  i1242.m_Scale = i1243[3]
  return i1242
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1249 = data
  i1248.Name = i1249[0]
  i1248.PointSize = i1249[1]
  i1248.Scale = i1249[2]
  i1248.CharacterCount = i1249[3]
  i1248.LineHeight = i1249[4]
  i1248.Baseline = i1249[5]
  i1248.Ascender = i1249[6]
  i1248.CapHeight = i1249[7]
  i1248.Descender = i1249[8]
  i1248.CenterLine = i1249[9]
  i1248.SuperscriptOffset = i1249[10]
  i1248.SubscriptOffset = i1249[11]
  i1248.SubSize = i1249[12]
  i1248.Underline = i1249[13]
  i1248.UnderlineThickness = i1249[14]
  i1248.strikethrough = i1249[15]
  i1248.strikethroughThickness = i1249[16]
  i1248.TabWidth = i1249[17]
  i1248.Padding = i1249[18]
  i1248.AtlasWidth = i1249[19]
  i1248.AtlasHeight = i1249[20]
  return i1248
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1253 = data
  i1252.id = i1253[0]
  i1252.x = i1253[1]
  i1252.y = i1253[2]
  i1252.width = i1253[3]
  i1252.height = i1253[4]
  i1252.xOffset = i1253[5]
  i1252.yOffset = i1253[6]
  i1252.xAdvance = i1253[7]
  i1252.scale = i1253[8]
  return i1252
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.KerningTable' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.KerningPair', i1257[i + 0]));
  }
  i1254.kerningPairs = i1256
  return i1254
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.KerningPair' )
  var i1261 = data
  i1260.xOffset = i1261[0]
  i1260.m_FirstGlyph = i1261[1]
  i1260.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1261[2], i1260.m_FirstGlyphAdjustments)
  i1260.m_SecondGlyph = i1261[3]
  i1260.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1261[4], i1260.m_SecondGlyphAdjustments)
  i1260.m_IgnoreSpacingAdjustments = !!i1261[5]
  return i1260
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1263 = data
  var i1265 = i1263[0]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1265[i + 0]));
  }
  i1262.m_GlyphPairAdjustmentRecords = i1264
  return i1262
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1269 = data
  i1268.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1269[0], i1268.m_FirstAdjustmentRecord)
  i1268.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1269[1], i1268.m_SecondAdjustmentRecord)
  i1268.m_FeatureLookupFlags = i1269[2]
  return i1268
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1271 = data
  i1270.m_GlyphIndex = i1271[0]
  i1270.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1271[1], i1270.m_GlyphValueRecord)
  return i1270
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1273 = data
  i1272.m_XPlacement = i1273[0]
  i1272.m_YPlacement = i1273[1]
  i1272.m_XAdvance = i1273[2]
  i1272.m_YAdvance = i1273[3]
  return i1272
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1277 = data
  i1276.sourceFontFileName = i1277[0]
  i1276.sourceFontFileGUID = i1277[1]
  i1276.pointSizeSamplingMode = i1277[2]
  i1276.pointSize = i1277[3]
  i1276.padding = i1277[4]
  i1276.packingMode = i1277[5]
  i1276.atlasWidth = i1277[6]
  i1276.atlasHeight = i1277[7]
  i1276.characterSetSelectionMode = i1277[8]
  i1276.characterSequence = i1277[9]
  i1276.referencedFontAssetGUID = i1277[10]
  i1276.referencedTextAssetGUID = i1277[11]
  i1276.fontStyle = i1277[12]
  i1276.fontStyleModifier = i1277[13]
  i1276.renderMode = i1277[14]
  i1276.includeFontFeatures = !!i1277[15]
  return i1276
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'regularTypeface')
  request.r(i1281[2], i1281[3], 0, i1280, 'italicTypeface')
  return i1280
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1283 = data
  i1282.hashCode = i1283[0]
  request.r(i1283[1], i1283[2], 0, i1282, 'material')
  i1282.materialHashCode = i1283[3]
  request.r(i1283[4], i1283[5], 0, i1282, 'spriteSheet')
  var i1285 = i1283[6]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.TMP_Sprite', i1285[i + 0]));
  }
  i1282.spriteInfoList = i1284
  var i1287 = i1283[7]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1282.fallbackSpriteAssets = i1286
  i1282.m_Version = i1283[8]
  i1282.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1283[9], i1282.m_FaceInfo)
  var i1289 = i1283[10]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.TMP_SpriteCharacter', i1289[i + 0]));
  }
  i1282.m_SpriteCharacterTable = i1288
  var i1291 = i1283[11]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.TMP_SpriteGlyph', i1291[i + 0]));
  }
  i1282.m_SpriteGlyphTable = i1290
  return i1282
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1295 = data
  i1294.name = i1295[0]
  i1294.hashCode = i1295[1]
  i1294.unicode = i1295[2]
  i1294.pivot = new pc.Vec2( i1295[3], i1295[4] )
  request.r(i1295[5], i1295[6], 0, i1294, 'sprite')
  i1294.id = i1295[7]
  i1294.x = i1295[8]
  i1294.y = i1295[9]
  i1294.width = i1295[10]
  i1294.height = i1295[11]
  i1294.xOffset = i1295[12]
  i1294.yOffset = i1295[13]
  i1294.xAdvance = i1295[14]
  i1294.scale = i1295[15]
  return i1294
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1301 = data
  i1300.m_Name = i1301[0]
  i1300.m_HashCode = i1301[1]
  i1300.m_ElementType = i1301[2]
  i1300.m_Unicode = i1301[3]
  i1300.m_GlyphIndex = i1301[4]
  i1300.m_Scale = i1301[5]
  return i1300
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'sprite')
  i1304.m_Index = i1305[2]
  i1304.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1305[3], i1304.m_Metrics)
  i1304.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1305[4], i1304.m_GlyphRect)
  i1304.m_Scale = i1305[5]
  i1304.m_AtlasIndex = i1305[6]
  i1304.m_ClassDefinitionType = i1305[7]
  return i1304
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.TMP_Style', i1309[i + 0]));
  }
  i1306.m_StyleList = i1308
  return i1306
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_Style' )
  var i1313 = data
  i1312.m_Name = i1313[0]
  i1312.m_HashCode = i1313[1]
  i1312.m_OpeningDefinition = i1313[2]
  i1312.m_ClosingDefinition = i1313[3]
  i1312.m_OpeningTagArray = i1313[4]
  i1312.m_ClosingTagArray = i1313[5]
  i1312.m_OpeningTagUnicodeArray = i1313[6]
  i1312.m_ClosingTagUnicodeArray = i1313[7]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1317[i + 0]) );
  }
  i1314.files = i1316
  i1314.componentToPrefabIds = i1315[1]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1321 = data
  i1320.path = i1321[0]
  request.r(i1321[1], i1321[2], 0, i1320, 'unityObject')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1325[i + 0]) );
  }
  i1322.scriptsExecutionOrder = i1324
  var i1327 = i1323[1]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1327[i + 0]) );
  }
  i1322.sortingLayers = i1326
  var i1329 = i1323[2]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1329[i + 0]) );
  }
  i1322.cullingLayers = i1328
  i1322.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1323[3], i1322.timeSettings)
  i1322.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1323[4], i1322.physicsSettings)
  i1322.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1323[5], i1322.physics2DSettings)
  i1322.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1323[6], i1322.qualitySettings)
  i1322.enableRealtimeShadows = !!i1323[7]
  i1322.enableAutoInstancing = !!i1323[8]
  i1322.enableDynamicBatching = !!i1323[9]
  i1322.lightmapEncodingQuality = i1323[10]
  i1322.desiredColorSpace = i1323[11]
  var i1331 = i1323[12]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( i1331[i + 0] );
  }
  i1322.allTags = i1330
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.value = i1335[1]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.name = i1339[1]
  i1338.value = i1339[2]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.name = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1345 = data
  i1344.fixedDeltaTime = i1345[0]
  i1344.maximumDeltaTime = i1345[1]
  i1344.timeScale = i1345[2]
  i1344.maximumParticleTimestep = i1345[3]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1347 = data
  i1346.gravity = new pc.Vec3( i1347[0], i1347[1], i1347[2] )
  i1346.defaultSolverIterations = i1347[3]
  i1346.bounceThreshold = i1347[4]
  i1346.autoSyncTransforms = !!i1347[5]
  i1346.autoSimulation = !!i1347[6]
  var i1349 = i1347[7]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1349[i + 0]) );
  }
  i1346.collisionMatrix = i1348
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1353 = data
  i1352.enabled = !!i1353[0]
  i1352.layerId = i1353[1]
  i1352.otherLayerId = i1353[2]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'material')
  i1354.gravity = new pc.Vec2( i1355[2], i1355[3] )
  i1354.positionIterations = i1355[4]
  i1354.velocityIterations = i1355[5]
  i1354.velocityThreshold = i1355[6]
  i1354.maxLinearCorrection = i1355[7]
  i1354.maxAngularCorrection = i1355[8]
  i1354.maxTranslationSpeed = i1355[9]
  i1354.maxRotationSpeed = i1355[10]
  i1354.baumgarteScale = i1355[11]
  i1354.baumgarteTOIScale = i1355[12]
  i1354.timeToSleep = i1355[13]
  i1354.linearSleepTolerance = i1355[14]
  i1354.angularSleepTolerance = i1355[15]
  i1354.defaultContactOffset = i1355[16]
  i1354.autoSimulation = !!i1355[17]
  i1354.queriesHitTriggers = !!i1355[18]
  i1354.queriesStartInColliders = !!i1355[19]
  i1354.callbacksOnDisable = !!i1355[20]
  i1354.reuseCollisionCallbacks = !!i1355[21]
  i1354.autoSyncTransforms = !!i1355[22]
  var i1357 = i1355[23]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1357[i + 0]) );
  }
  i1354.collisionMatrix = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1361 = data
  i1360.enabled = !!i1361[0]
  i1360.layerId = i1361[1]
  i1360.otherLayerId = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1365[i + 0]) );
  }
  i1362.qualityLevels = i1364
  var i1367 = i1363[1]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( i1367[i + 0] );
  }
  i1362.names = i1366
  i1362.shadows = i1363[2]
  i1362.anisotropicFiltering = i1363[3]
  i1362.antiAliasing = i1363[4]
  i1362.lodBias = i1363[5]
  i1362.shadowCascades = i1363[6]
  i1362.shadowDistance = i1363[7]
  i1362.shadowmaskMode = i1363[8]
  i1362.shadowProjection = i1363[9]
  i1362.shadowResolution = i1363[10]
  i1362.softParticles = !!i1363[11]
  i1362.softVegetation = !!i1363[12]
  i1362.activeColorSpace = i1363[13]
  i1362.desiredColorSpace = i1363[14]
  i1362.masterTextureLimit = i1363[15]
  i1362.maxQueuedFrames = i1363[16]
  i1362.particleRaycastBudget = i1363[17]
  i1362.pixelLightCount = i1363[18]
  i1362.realtimeReflectionProbes = !!i1363[19]
  i1362.shadowCascade2Split = i1363[20]
  i1362.shadowCascade4Split = new pc.Vec3( i1363[21], i1363[22], i1363[23] )
  i1362.streamingMipmapsActive = !!i1363[24]
  i1362.vSyncCount = i1363[25]
  i1362.asyncUploadBufferSize = i1363[26]
  i1362.asyncUploadTimeSlice = i1363[27]
  i1362.billboardsFaceCameraPosition = !!i1363[28]
  i1362.shadowNearPlaneOffset = i1363[29]
  i1362.streamingMipmapsMemoryBudget = i1363[30]
  i1362.maximumLODLevel = i1363[31]
  i1362.streamingMipmapsAddAllCameras = !!i1363[32]
  i1362.streamingMipmapsMaxLevelReduction = i1363[33]
  i1362.streamingMipmapsRenderersPerFrame = i1363[34]
  i1362.resolutionScalingFixedDPIFactor = i1363[35]
  i1362.streamingMipmapsMaxFileIORequests = i1363[36]
  i1362.currentQualityLevel = i1363[37]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1373 = data
  i1372.weight = i1373[0]
  i1372.vertices = i1373[1]
  i1372.normals = i1373[2]
  i1372.tangents = i1373[3]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1377 = data
  i1376.mode = i1377[0]
  i1376.parameter = i1377[1]
  i1376.threshold = i1377[2]
  return i1376
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1379 = data
  i1378.xPlacement = i1379[0]
  i1378.yPlacement = i1379[1]
  i1378.xAdvance = i1379[2]
  i1378.yAdvance = i1379[3]
  return i1378
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"anchor":0,"connectedAnchor":2,"autoConfigureConnectedAnchor":4,"enabled":5,"useLimits":6,"limits":7,"useMotor":8,"motor":9,"connectedBody":10,"breakForce":12,"breakTorque":13,"enableCollision":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[22],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[55],"85":[55],"86":[55],"87":[55],"88":[55],"89":[55],"56":[55],"90":[55],"91":[55],"92":[55],"93":[55],"94":[55],"95":[55],"96":[22],"97":[19],"98":[99],"100":[99],"30":[29],"101":[102],"103":[29],"104":[29],"32":[30],"34":[33,29],"105":[29],"31":[30],"106":[29],"107":[29],"108":[29],"109":[29],"110":[29],"111":[29],"112":[29],"113":[29],"114":[29],"115":[33,29],"116":[29],"117":[29],"118":[29],"119":[29],"38":[33,29],"120":[29],"121":[27],"122":[27],"28":[27],"123":[27],"124":[22],"125":[22],"126":[102],"127":[22],"128":[129],"130":[29],"131":[33,29],"17":[19],"132":[33,29],"133":[42,19],"134":[19],"135":[19,18],"136":[77],"137":[55],"138":[129],"139":[140],"141":[29],"142":[19,29],"143":[29,33],"144":[29],"145":[33,29],"146":[19],"147":[33,29],"148":[29],"149":[102]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MonoBehaviour","AutoDestroy","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","ObjectPool","UnityEngine.GameObject","AudioManager","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","Saw","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","CameraDistanceConfig","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","store","LoadEndcard","UnityEngine.UI.Text","UnityEngine.Font","IngameTutorial","UIFollowObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Hint","GameManager","UnityEngine.BoxCollider2D","wall","LevelController","UnityEngine.Rendering.SortingGroup","BoardHole","UnityEngine.SpriteMask","Bar","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","UnityEngine.HingeJoint2D","BarHole","Bolt","UnityEngine.Cubemap","Key","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.20f1";

Deserializers.productName = "os";

Deserializers.lunaInitializationTime = "09/12/2024 18:26:26";

Deserializers.lunaDaysRunning = "4.5";

Deserializers.lunaVersion = "6.1.0";

Deserializers.lunaSHA = "79acaf78c62676b38c36badeeb2083e64dfc1990";

Deserializers.creativeName = "map_1_final2";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5580";

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

Deserializers.buildID = "9a190244-ce0d-4acf-956f-5254bc50c16c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

