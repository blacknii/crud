import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get by h1
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("Customer Acquisition Channel CRUD");

    // Get by h2
    const h2 = wrapper.container.querySelector("h2");
    expect(h2?.textContent).toBe("Table");

    // Get by Table
    const table = wrapper.container.querySelector("table");
    expect(table?.textContent).toBe("ChannelAmountActions");
  });
});
