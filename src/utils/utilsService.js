export class UtilServices {
  static generateCode(length = 4) {
    return Array.from({ length })
      .map((_) => Math.floor(Math.random() * 9))
      .join('');
  }
}
