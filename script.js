class Medematiques {
  getInfo() {
    return {
      color1: "#773c00",
      color2: "#5f3000",
      id: "Médématiques",
      name: "Médématiques",
      description: '[deleted]',
      blocks: [
        {
          opcode: 'notEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[TEXT_1] ≠ [TEXT_2]',
          arguments: {
            TEXT_1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello'
            },
            TEXT_2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Bonjour'
            }
          }
        },
      ]
    }
  }
  notEquals(args) {
    var isEquals = args.TEXT_1 != args.TEXT_2;
    return isEquals;
  }
}
Scratch.extensions.register(new Medematiques());
