import angular, {IScope} from "angular";
import React from "react";
import {YourName} from "./YourName";
import {createRoot} from "react-dom/client";

type MyScope = {
    name: string;
    onChange: (payload: { newVal: string }) => void;
} & IScope
angular.module("react", [])
    .directive("reactWrapper", () => {
        return {
            restrict: "E",
            scope: {
                name: "=",
                onChange: "&"
            },
            link: (scope, element) => {
                const myScope: MyScope = scope as any;
                const root = createRoot(element[0]);
                console.log("scope is", scope);
                const onUpdate = (newVal: string) => {

                    myScope.$apply(() => myScope.onChange({newVal}));
                };
                scope.$watch("name", (newVal: string) => {
                        console.log("change");


                        root.render(<YourName name={newVal} onUpdate={onUpdate}/>);
                    }
                );
                scope.$on("$destroy", () => {
                    root.unmount();
                });
            }
        };

    });
