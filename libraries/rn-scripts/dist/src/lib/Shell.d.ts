/// <reference types="node" />
import { SpawnSyncOptions } from 'child_process';
export default class Shell {
    /**
     * Executes shell command and returns output as a string
     * Also removes trailing newline.
     */
    static sh_s(command: string, args?: string[], options?: SpawnSyncOptions): string;
    static echo(text: string): void;
    /**
     * Executes shell command and returns each line output as part of a string array
     * Also removes last line
     */
    static sh_array(command: string, args?: string[], options?: SpawnSyncOptions): string[];
    /**
     * Executes shell command and returns output as a number
     */
    static sh_i(command: string, args?: string[], options?: SpawnSyncOptions): number;
    /**
     * Returns the current directory as a string
     */
    static pwd(): string;
    /**
     * @experimental
     * Similar to sh() but arguments are sent together as one combined string instead of an array
     */
    static sh_2(command: string, options?: SpawnSyncOptions): Promise<null>;
    /**
     * Executes an async shell command while piping output to std:io
     */
    static sh(command: string, args: string[], options?: SpawnSyncOptions): Promise<null>;
    /**
     * @deprecated - Please don't use this
     */
    static dir_sh(location: 'android' | 'ios' | 'root', command: string): Promise<null>;
    /**
     * @deprecated - Please don't use this
     * Passes in a relative path and attempts to locate it by searching current directory, child directory, or ancestors
     */
    static find_path(relative_path: string): string;
    /**
     * Returns true if this is the root of a node directory
     * (root node directories are determined by the presence of package.json)
     */
    static is_root_node_dir(options?: SpawnSyncOptions): boolean;
}
