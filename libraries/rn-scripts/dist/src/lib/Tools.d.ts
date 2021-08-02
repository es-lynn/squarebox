export default class Tools {
    /**
     * @experimental Calculates and returns a version number based on git commits
     */
    static version_from_git(head: string, offset?: number): number;
    /**
     * Calculates and returns a version number based on epoch timestamp / 10
     *   Note: Timestamp is divided by 10 to extend usage until year 2600 due to Android maximum BUILD_NUMBER = 2.1B
     *         This means that 2 parallel builds may conflict if they start within 10 seconds of one another
     */
    static version_from_epoch(offset?: number): number;
    /**
     * Returns the version string defined in package.json: {"version": "x.y.z"}
     */
    static version_from_package(): string;
    static project_name_from_package(): string;
}
