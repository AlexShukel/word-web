import { renderHook } from "@testing-library/react-hooks";

import { useWordsContext } from "../../../src/frontend/hooks/useWordsContext";

describe("useWordsContext", () => {
    it("should throw error", () => {
        const { result } = renderHook(() => useWordsContext());

        expect(result.error).toBeDefined();
    });
});
