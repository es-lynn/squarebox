## set_build_no

! Please only set either src or num, but not both

- src?: "git" | "timestamp"
- num?: number
- platform?: "android" | "ios"
- gradle_path?: string
- xcode_path?: string
- min_number?: number

num: Manually set build_number

    npx @siliconjungles/rn-scripts set_build_num num=123456
    
src: Auto-calculate build_number based on git commits
    
    npx @siliconjungles/rn-scripts set_build_num src=git
    
platform: Build only for Android or iOS platform

    npx @siliconjungles/rn-scripts set_build_num num=123456 platform=android

gradle_path: Manually set path to build.gradle
 
    npx @siliconjungles/rn-scripts set_build_num num=123456 gradle_path=android/app/build.gradle
    
xcode_path: Manually set path to xcode

    npx @siliconjungles/rn-scripts set_build_num num=123456 xcode_path=somewhere

base_num: The minimum number that builds start from. Sometimes required as Android cannot downgrade versions

    npx @siliconjungles/rn-scripts set_build_num src=git base_num=200000

## set_ver_name

! Please only set either src or name, but not both

- name?: name
- src?: "package.json"
- platform?: "android" | "ios"
- gradle_path?: string
- xcode_path?: string
- suffix?: number

name: Set version name manually

    npx @siliconjungles/rn-scripts set_ver_name name=1.2.3
    
src: Set version based on package.json

    npx @siliconjungles/rn-scripts set_ver_name src:package.json
    
platform: Build only for Android or iOS platform

    npx @siliconjungles/rn-scripts set_ver_name name=1.2.3 platform=android
    
gradle_path: Manually set path to build.gradle
 
    npx @siliconjungles/rn-scripts set_ver_name name=1.2.3 gradle_path=android/app/build.gradle
    
xcode_path: Manually set path to xcode

    npx @siliconjungles/rn-scripts set_ver_name name=1.2.3 xcode_path=somewhere

suffix: Add a suffix to version_name

    npx @siliconjungles/rn-scripts set_ver_name name=1.2.3 suffix=alpha

## build_android
    
- type: "apk" | "aab"
- params: {json_obj}

type: Build either an APK or AAB file

    npx @siliconjungles/rn-scripts build_android type=apk

params: Pass in a JSON object that will be forwarded as parameters to build.gradle

    npx @siliconjungles/rn-scripts build_android params={password:'abcdefg'} type=aab

# npm

## local testing

    npm link
    
    npx @siliconjungles/rn-scripts

## publishing

login:

    npm login

first publish:

    npm publish --access public

subsequent publishes:

    npm publish
