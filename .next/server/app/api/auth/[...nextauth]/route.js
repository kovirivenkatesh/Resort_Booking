"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Projects_ResortBooking_Next_Resort_Project_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Projects\\\\ResortBooking\\\\Next_Resort_Project\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Projects_ResortBooking_Next_Resort_Project_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDUHJvamVjdHMlNUNSZXNvcnRCb29raW5nJTVDTmV4dF9SZXNvcnRfUHJvamVjdCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1Byb2plY3RzJTVDUmVzb3J0Qm9va2luZyU1Q05leHRfUmVzb3J0X1Byb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzhDO0FBQzNIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzb3J0X2Jvb2tpbmcvP2FhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcUHJvamVjdHNcXFxcUmVzb3J0Qm9va2luZ1xcXFxOZXh0X1Jlc29ydF9Qcm9qZWN0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxQcm9qZWN0c1xcXFxSZXNvcnRCb29raW5nXFxcXE5leHRfUmVzb3J0X1Byb2plY3RcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* reexport safe */ _app_auth__WEBPACK_IMPORTED_MODULE_0__.GET),\n/* harmony export */   POST: () => (/* reexport safe */ _app_auth__WEBPACK_IMPORTED_MODULE_0__.POST)\n/* harmony export */ });\n/* harmony import */ var _app_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/auth */ \"(rsc)/./src/app/auth.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ21DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzb3J0X2Jvb2tpbmcvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7R0VULFBPU1R9IGZyb20gJ0AvYXBwL2F1dGgnIl0sIm5hbWVzIjpbIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/auth.js":
/*!*************************!*\
  !*** ./src/app/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _utils_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/models/User */ \"(rsc)/./src/app/utils/models/User.js\");\n\n\n\nconst { auth, signIn, signOut, handlers: { GET, POST } } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            async authorize (credentials) {\n                const user = await _utils_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: credentials?.email\n                });\n                if (!user) {\n                    return null;\n                }\n                if (credentials?.password !== user.password) {\n                    return null;\n                }\n                return {\n                    name: user.username,\n                    email: user.email,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    secret: process.env.SECRET_KEY,\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.userId = user.id;\n                token.username = user.name;\n                token.role = user.role;\n                token.email = user.email;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.userId = token.userId;\n            session.username = token.username;\n            session.role = token.role;\n            session.email = token.email;\n            return session;\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDZ0M7QUFDckI7QUFHcEMsTUFBTSxFQUFDRyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFTLEVBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFDLEVBQUMsR0FBR1IscURBQVFBLENBQUM7SUFDbEVTLFdBQVU7UUFDTlIsMkVBQWtCQSxDQUFDO1lBQ2ZTLE1BQU07WUFFTixNQUFNQyxXQUFVQyxXQUFXO2dCQUN2QixNQUFNQyxPQUFPLE1BQU1YLDBEQUFTQSxDQUFDWSxPQUFPLENBQUM7b0JBQUNDLE9BQU9ILGFBQWFHO2dCQUFLO2dCQUMvRCxJQUFHLENBQUNGLE1BQUs7b0JBQ0wsT0FBTztnQkFDWDtnQkFDQSxJQUFHRCxhQUFhSSxhQUFhSCxLQUFLRyxRQUFRLEVBQUM7b0JBQ3ZDLE9BQU87Z0JBQ1g7Z0JBQ0EsT0FBTztvQkFBQ04sTUFBTUcsS0FBS0ksUUFBUTtvQkFBRUYsT0FBT0YsS0FBS0UsS0FBSztvQkFBRUcsTUFBTUwsS0FBS0ssSUFBSTtnQkFBQTtZQUNuRTtRQUVKO0tBRUg7SUFDREMsUUFBT0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0lBQzdCQyxXQUFVO1FBQ04sTUFBTUMsS0FBSSxFQUFDQyxLQUFLLEVBQUVaLElBQUksRUFBQztZQUNuQixJQUFHQSxNQUFLO2dCQUNKWSxNQUFNQyxNQUFNLEdBQUdiLEtBQUtjLEVBQUU7Z0JBQ3RCRixNQUFNUixRQUFRLEdBQUdKLEtBQUtILElBQUk7Z0JBQzFCZSxNQUFNUCxJQUFJLEdBQUdMLEtBQUtLLElBQUk7Z0JBQ3RCTyxNQUFNVixLQUFLLEdBQUdGLEtBQUtFLEtBQUs7WUFFNUI7WUFDQSxPQUFPVTtRQUNYO1FBQ0EsTUFBTUcsU0FBUSxFQUFDQSxPQUFPLEVBQUVILEtBQUssRUFBQztZQUMxQkcsUUFBUUYsTUFBTSxHQUFHRCxNQUFNQyxNQUFNO1lBQzdCRSxRQUFRWCxRQUFRLEdBQUdRLE1BQU1SLFFBQVE7WUFDakNXLFFBQVFWLElBQUksR0FBR08sTUFBTVAsSUFBSTtZQUN6QlUsUUFBUWIsS0FBSyxHQUFHVSxNQUFNVixLQUFLO1lBQzNCLE9BQU9hO1FBQ1g7SUFDSjtBQUVKLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNvcnRfYm9va2luZy8uL3NyYy9hcHAvYXV0aC5qcz8xODRjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IENyZWRlbnRpYWxQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuL3V0aWxzL21vZGVscy9Vc2VyJ1xuXG5cbmV4cG9ydCBjb25zdCB7YXV0aCwgc2lnbkluLCBzaWduT3V0LCBoYW5kbGVyczp7R0VULCBQT1NUfX0gPSBOZXh0QXV0aCh7XG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgQ3JlZGVudGlhbFByb3ZpZGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXG5cbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHtlbWFpbDogY3JlZGVudGlhbHM/LmVtYWlsfSlcbiAgICAgICAgICAgICAgICBpZighdXNlcil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjcmVkZW50aWFscz8ucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge25hbWU6IHVzZXIudXNlcm5hbWUsIGVtYWlsOiB1c2VyLmVtYWlsLCByb2xlOiB1c2VyLnJvbGV9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIF0sXG4gICAgc2VjcmV0OnByb2Nlc3MuZW52LlNFQ1JFVF9LRVksXG4gICAgY2FsbGJhY2tzOntcbiAgICAgICAgYXN5bmMgand0KHt0b2tlbiwgdXNlcn0pe1xuICAgICAgICAgICAgaWYodXNlcil7XG4gICAgICAgICAgICAgICAgdG9rZW4udXNlcklkID0gdXNlci5pZDtcbiAgICAgICAgICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIubmFtZVxuICAgICAgICAgICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICAgICAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHtzZXNzaW9uLCB0b2tlbn0pe1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VySWQgPSB0b2tlbi51c2VySWQ7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXJuYW1lID0gdG9rZW4udXNlcm5hbWU7XG4gICAgICAgICAgICBzZXNzaW9uLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgICAgICAgc2Vzc2lvbi5lbWFpbCA9IHRva2VuLmVtYWlsXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblxuICAgICAgICB9XG4gICAgfVxuXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxQcm92aWRlciIsIlVzZXJNb2RlbCIsImF1dGgiLCJzaWduSW4iLCJzaWduT3V0IiwiaGFuZGxlcnMiLCJHRVQiLCJQT1NUIiwicHJvdmlkZXJzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlcm5hbWUiLCJyb2xlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9LRVkiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXJJZCIsImlkIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/auth.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/models/User.js":
/*!**************************************!*\
  !*** ./src/app/utils/models/User.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { default: mongoose, mongo } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst userSchema = new mongoose.Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    bookings: [\n        {\n            type: mongoose.Schema.Types.ObjectId,\n            ref: \"booking\"\n        }\n    ]\n});\nconst UserModel = mongoose.models.user || mongoose.model(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL21vZGVscy9Vc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLFNBQVNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBR3ZELE1BQU1DLGFBQWEsSUFBSUgsU0FBU0ksTUFBTSxDQUFDO0lBQ25DQyxVQUFTO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVM7SUFDYjtJQUNBQyxPQUFNO1FBQ0ZILE1BQUtDO1FBQ0xDLFVBQVM7UUFDVEUsUUFBUTtJQUNaO0lBQ0FDLFVBQVM7UUFDTEwsTUFBS0M7UUFDTEMsVUFBUztJQUNiO0lBQ0FJLE1BQUs7UUFDRE4sTUFBS0M7UUFDTFIsU0FBUTtJQUNaO0lBQ0FjLFVBQVM7UUFBQztZQUNOUCxNQUFNTixTQUFTSSxNQUFNLENBQUNVLEtBQUssQ0FBQ0MsUUFBUTtZQUNwQ0MsS0FBSTtRQUNSO0tBQUU7QUFDTjtBQUVBLE1BQU1DLFlBQVlqQixTQUFTa0IsTUFBTSxDQUFDQyxJQUFJLElBQUluQixTQUFTb0IsS0FBSyxDQUFDLFFBQVFqQjtBQUVqRSxpRUFBZWMsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc29ydF9ib29raW5nLy4vc3JjL2FwcC91dGlscy9tb2RlbHMvVXNlci5qcz82NjU4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVmYXVsdDogbW9uZ29vc2UsIG1vbmdvIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHVzZXJuYW1lOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlXG4gICAgfSxcbiAgICBlbWFpbDp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzd29yZDp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlXG4gICAgfSxcbiAgICByb2xlOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6J3VzZXInXG4gICAgfSxcbiAgICBib29raW5nczpbe1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjonYm9va2luZydcbiAgICB9XVxufSlcblxuY29uc3QgVXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWwiXSwibmFtZXMiOlsiZGVmYXVsdCIsIm1vbmdvb3NlIiwibW9uZ28iLCJyZXF1aXJlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJib29raW5ncyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/jose","vendor-chunks/oauth4webapi","vendor-chunks/next-auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5CResortBooking%5CNext_Resort_Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();