import { livescienceTestResult } from "../data/livescienceTestResult";
import { spaceTestResult } from "../data/spaceTestResult";
import { tomsguideTestResult } from "../data/tomsguideTestResult";

export const INITIAL_STATE = {
  livescience: livescienceTestResult,
  space: spaceTestResult,
  tomsguide: tomsguideTestResult,
  count: 100,
  loading: false
};
