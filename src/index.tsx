import { action } from "@storybook/addon-actions";
import React from "react";
import { render } from "react-dom";
import { CellField } from "./components/Field/CellField";

render(
    <CellField key="jsx" clickMe={action("Выбрана ячейка")} xCount={3} yCount={3} />,
    document.getElementById("root")
);