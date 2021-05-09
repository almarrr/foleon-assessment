import { fireEvent, render } from "@testing-library/react";

import Search from "./Search";

describe("verwacht dat ingetypte zoekterm hetzelfde is als wat je hebt getypt", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Search />);

    const input = queryByTitle("search");

    fireEvent.change(input, {
      target: {
        value: "brochure",
      },
    });

    expect(input.value).toBe("brochure");
  });
});
