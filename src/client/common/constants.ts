export const PYTHON_LANGUAGE = 'python';
export const MARKDOWN_LANGUAGE = 'markdown';
export const JUPYTER_LANGUAGE = 'jupyter';

export const NotebookCellScheme = 'vscode-notebook-cell';
export const PYTHON_UNTITLED = { scheme: 'untitled', language: PYTHON_LANGUAGE };
export const PYTHON_FILE = { scheme: 'file', language: PYTHON_LANGUAGE };
export const PYTHON_CELL = { scheme: NotebookCellScheme, language: PYTHON_LANGUAGE };
export const PYTHON = [PYTHON_UNTITLED, PYTHON_FILE, PYTHON_CELL];
export const PYTHON_ALLFILES = [{ language: PYTHON_LANGUAGE }];
export const GITHUB_ISSUE_MARKDOWN_FILE = [{ language: MARKDOWN_LANGUAGE, scheme: 'untitled', pattern: '**/issue.md' }];

export const JVSC_EXTENSION_ID = 'ms-toolsai.jupyter';
export const JVSC_EXTENSION_DisplayName = 'Jupyter';
export const AppinsightsKey = 'AIF-d9b70cd4-b9f9-4d70-929b-a071c400b217';

export namespace Octicons {
    export const Downloading = '$(cloud-download)';
    export const Installing = '$(desktop-download)';
}

export namespace Text {
    export const CodeLensRunUnitTest = 'Run Test';
    export const CodeLensDebugUnitTest = 'Debug Test';
}
export namespace Delays {
    // Max time to wait before aborting the generation of code lenses for unit tests
    export const MaxUnitTestCodeLensDelay = 5000;
}

export const DEFAULT_INTERPRETER_SETTING = 'python';

export const STANDARD_OUTPUT_CHANNEL = 'STANDARD_OUTPUT_CHANNEL';

export const isCI = process.env.TF_BUILD !== undefined || process.env.GITHUB_ACTIONS === 'true';

export function isTestExecution(): boolean {
    return process.env.VSC_JUPYTER_CI_TEST === '1' || isUnitTestExecution();
}

/**
 * Whether we're running unit tests (*.unit.test.ts).
 * These tests have a speacial meaning, they run fast.
 * @export
 * @returns {boolean}
 */
export function isUnitTestExecution(): boolean {
    return process.env.VSC_JUPYTER_UNIT_TEST === '1';
}

export * from '../constants';
