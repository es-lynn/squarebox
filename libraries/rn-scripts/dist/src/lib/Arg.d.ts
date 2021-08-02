export default class Arg {
    /**
     * Returns the first argument value (process.argv[2])
     * @throws {Error} when accepted_values does not contain argument
     */
    static v_first_enum(accepted_values: string[]): string;
    /**
     * Returns the value for a specified key
     * @throws {Error} when accepted_values does not contain argument
     */
    static v_enum(key: string, accepted_values: string[]): string;
    /**
     * Returns the value for a specified key, or undefined if it cannot be found
     * @throws {Error} when accepted_values does not contain argument
     */
    static v_enum_null(key: string, accepted_values: string[]): string | undefined;
    /**
     * Returns the value for a specified key
     * @throws {Error} if no value can be found for that key
     */
    static v(key: string): string;
    /**
     * Returns the value for a specified key, or undefined if it cannot be found
     */
    static v_null(key: string): string | undefined;
    /**
     * Returns the numeric value for a specified key
     * @throws {TypeError} if value is not a valid number
     */
    static v_number(key: string): number;
    /**
     * Returns the numeric value for a specified key, or undefined if it cannot be found
     * @throws {TypeError} if value is not a valid number
     */
    static v_number_null(key: string): number | undefined;
    /**
    * Returns the numeric value for a specified key
    * @throws {TypeError} if value is not a valid number
    */
    static v_boolean(key: string): boolean;
    /**
     * Returns the numeric value for a specified key, or undefined if it cannot be found
     * @throws {TypeError} if value is not a valid number
     */
    static v_boolean_null(key: string): boolean | undefined;
    /**
     * !!! This function will convert all JSON values to strings.
     * FIXME: Make it parse JSONs properly
     */
    static v_json(key: string): any;
    static v_json_null(key: string): object | undefined;
}
