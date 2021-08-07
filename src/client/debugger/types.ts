// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { DebugSession, NotebookDocument } from 'vscode';

export type ConsoleType = 'internalConsole' | 'integratedTerminal' | 'externalTerminal';

export interface IKernelDebugAdapter {
    debugSession: DebugSession;
    runByLineContinue(): void;
    runByLineStop(): void;
}

export const IDebuggingManager = Symbol('IDebuggingManager');
export interface IDebuggingManager {
    getDebugSession(notebook: NotebookDocument): DebugSession | undefined
} 