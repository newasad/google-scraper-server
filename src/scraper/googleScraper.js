"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var puppeteer = require("puppeteer");
var randomeIntFromInterval = function (min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
};
var sleep_for = function (page, min, max) { return __awaiter(void 0, void 0, void 0, function () {
    var sleep_duration;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sleep_duration = randomeIntFromInterval(min, max);
                console.log('oaitin for ', sleep_duration / 1000, 'seconds');
                return [4 /*yield*/, page.waitForTimeout(sleep_duration)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var main_actual = function (text) { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, URL_1, input, firstSearchResult, secondSearchResult, titles, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 15, , 16]);
                return [4 /*yield*/, puppeteer.launch({ headless: false })];
            case 1:
                browser = _b.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _b.sent();
                URL_1 = "https://google.com/";
                return [4 /*yield*/, page.setViewport({
                        width: 1450,
                        height: 800,
                        deviceScaleFactor: 1
                    })];
            case 3:
                _b.sent();
                return [4 /*yield*/, page.goto(URL_1, { waitUntil: "networkidle2" })];
            case 4:
                _b.sent();
                return [4 /*yield*/, sleep_for(page, 1000, 2000)];
            case 5:
                _b.sent();
                return [4 /*yield*/, page.$("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input")];
            case 6:
                input = _b.sent();
                if (!input) return [3 /*break*/, 14];
                return [4 /*yield*/, input.focus()];
            case 7:
                _b.sent();
                return [4 /*yield*/, page.keyboard.type(text, { delay: 200 })];
            case 8:
                _b.sent();
                return [4 /*yield*/, page.keyboard.press('Enter')];
            case 9:
                _b.sent();
                return [4 /*yield*/, page.waitForNavigation()];
            case 10:
                _b.sent();
                return [4 /*yield*/, page.$x('//div[@class="g"]')];
            case 11:
                firstSearchResult = _b.sent();
                return [4 /*yield*/, page.$x('//div[@class="g tF2Cxc"]')];
            case 12:
                secondSearchResult = _b.sent();
                firstSearchResult = __spreadArray([], secondSearchResult, true);
                return [4 /*yield*/, page.$$('#rso > div > div > div > div > a > h3 > span')];
            case 13:
                titles = _b.sent();
                console.log(titles.length);
                _b.label = 14;
            case 14: return [3 /*break*/, 16];
            case 15:
                _a = _b.sent();
                return [3 /*break*/, 16];
            case 16: return [2 /*return*/];
        }
    });
}); };
var main = function (text) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, main_actual(text)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
main("asaad");
