/*
 *  Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//blackberry.invoke.PhoneArguments ( [dialString : String ] ,  [smartDialing : Boolean ] ,  [lineId : Number ] )
var _self = function (dialString, smartDialing, lineId) {
    return {
        dialString: dialString,
        smartDialing: smartDialing,
        lineId: (lineId ? lineId : -1),
        view: 0
    };
};

//const Number  VIEW_NEW  = 0
_self.__defineGetter__("VIEW_CALL", function () {
    return 0;
});
//const Number  VIEW_DEFAULT  = 1
_self.__defineGetter__("VIEW_VOICEMAIL", function () {
    return 1;
});

module.exports = _self;
