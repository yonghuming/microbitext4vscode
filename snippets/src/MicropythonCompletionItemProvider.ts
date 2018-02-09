import * as vscode from 'vscode'
export default class MicropythonCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument, position: vscode.Position,
        token: vscode.CancellationToken):Thenable<vscode.CompletionItem[]>{
            // var items:Thenable<vscode.CompletionItem[]> = [];
            // items[0] = new vscode.CompletionItem("langxm");
            // return items;
                  
        }
    )
}