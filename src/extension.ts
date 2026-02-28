import * as vscode from "vscode";
import * as path from "path";

export function buildRef(fileName: string, startLine: number, endLine: number): string {
  if (startLine === endLine) {
    return `@${fileName}#${startLine}`;
  }
  return `@${fileName}#${startLine}-${endLine}`;
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "copyCodeRef.copy",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const selection = editor.selection;
      const fileName = path.basename(editor.document.fileName);
      const startLine = selection.start.line + 1;
      const endLine = selection.end.line + 1;

      const ref = buildRef(fileName, startLine, endLine);

      vscode.env.clipboard.writeText(ref);
      vscode.window.setStatusBarMessage(`Copied: ${ref}`, 3000);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() { }
