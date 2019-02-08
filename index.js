/**
 * Basically a copy of `inquirer/lib/prompts/editor`.
 */
const { edit } = require('edit-briefly');
const Editor = require('inquirer/lib/prompts/editor');

class BrieflyPrompt extends Editor {
  /**
   * Launch $VISUAL / $EDITOR on user press enter
   * @override
   */
  async startExternalEditor() {
    // Pause Readline to prevent stdin and stdout from being modified while the editor is showing
    this.rl.pause();
    try {
      const contents = await edit({
        contents: this.currentText,
        extension: this.opt.extension,
      });
      this.endExternalEditor(null, contents);
    } catch (error) {
      this.endExternalEditor(error);
    }
  }
}

module.exports = BrieflyPrompt;
