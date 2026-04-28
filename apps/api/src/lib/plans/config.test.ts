import { describe, expect, it } from "bun:test";
import { FEATURE_CONFIG, PLAN_CONFIG } from "./config";

describe("plan feature configuration", () => {
	it("gates custom AI agent avatars to Pro", () => {
		expect(FEATURE_CONFIG["custom-ai-agent-avatar"]).toMatchObject({
			key: "custom-ai-agent-avatar",
			name: "Custom AI Agent Avatar",
		});
		expect(PLAN_CONFIG.free.features["custom-ai-agent-avatar"]).toBe(false);
		expect(PLAN_CONFIG.hobby.features["custom-ai-agent-avatar"]).toBe(false);
		expect(PLAN_CONFIG.pro.features["custom-ai-agent-avatar"]).toBe(true);
	});
});
