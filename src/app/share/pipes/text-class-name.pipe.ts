import { Pipe, PipeTransform } from '@angular/core';

import { TextClass } from '../text-class.enum';

@Pipe({
  name: 'textClassName'
})
export class TextClassNamePipe implements PipeTransform {

  public static convert(value: TextClass): string {
    switch (value) {
      case TextClass.BOARDGAMES:
        return 'Настольные игры';
      case TextClass.BOOKS:
        return 'Книги и комиксы';
      case TextClass.CHARACTERS:
        return 'Персонажи';
      case TextClass.CREATURES:
        return 'Существа';
      case TextClass.DATES:
        return 'Даты';
      case TextClass.DROIDS:
        return 'Дроиды';
      case TextClass.EVENTS:
        return 'События';
      case TextClass.FILMS:
        return 'Фильмография';
      case TextClass.ORGANIZATIONS:
        return 'Объединения и организации';
      case TextClass.OTHER:
        return 'Вне вымышленной вселенной';
      case TextClass.PLACES:
        return 'Места';
      case TextClass.PLANETS:
        return 'Планеты';
      case TextClass.PLANTS:
        return 'Растения';
      case TextClass.RACE:
        return 'Расы';
      case TextClass.SPACESHIPS:
        return 'Звёздные корабли';
      case TextClass.TERMS:
        return 'Термины и понятия';
      case TextClass.TRANSPORT:
        return 'Наземная техника';
      case TextClass.VIDEOGAMES:
        return 'Видеоигры';
      case TextClass.WEAPONS:
        return 'Оружие';
      default:
        return '';
    }
  }

  transform(value: TextClass): string {
    return TextClassNamePipe.convert(value);
  }
}
