#!name=xcbwc
#!desc=xcbwc

[Script]
https://raw.githubusercontent.com/Sliverkiss/250a02315f0a2c99f42da3b3573375c8/ = type=http-response, pattern=^https:\/\/gw\.xiaocantech\.com\/rpc, script-path=https://gist.githubusercontent.com/Sliverkiss/250a02315f0a2c99f42da3b3573375c8/raw, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% gw.xiaocantech.com
