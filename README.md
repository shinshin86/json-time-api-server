# json-time-api-server
Implements simple time API Server at Node.js.<br>

This is created to learn Node.js.



## Usage

start api server.

```bash
yarn run start
# Let's access! => http://localhost:3000
```



And, send http request from browser.

```Json
http://localhost:3000/api/parsetime?iso=2018-03-03T09:10:15.474Z
=> {"hour":18,"minute":10,"second":15}
```



When send no parameter is return current time.

```json
http://localhost:3000/api/parsetime
=> {"hour":18,"minute":12,"second":35}
```



``/api/unixtime`` pattern return unixtime.

```json
http://localhost:3000/api/unixtime?iso=2018-03-03T09:10:15.474Z
=> {"unixtime":1520068215474}
```



## Test

```bash
yarn run test
```



## Reference

[NodeSchool](https://nodeschool.io/)

I refer to the contents of this site.<br>

This is Great site!