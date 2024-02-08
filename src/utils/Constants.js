export const ERR_MESSAGE_500 = '500 На сервере произошла ошибка.';
export const ERR_MESSAGE_404 = '404 Страница по указанному маршруту не найдена.';

export const RESIZE_DELAY_MS = 500;

export const MOVIES_SHORT_DURATION = 40;

export const MOVIES_DISPLAY_PARAMS = [
      {upper: Infinity, lower: 1220, perRow: 4, rowsInit: 4, rowsAdd: 1}
    , {upper: 1220, lower: 950, perRow: 3, rowsInit: 4, rowsAdd: 1}
    , {upper: 950, lower: 750, perRow: 2, rowsInit: 4, rowsAdd: 1}
    , {upper: 750, lower: 480, perRow: 1, rowsInit: 4, rowsAdd: 1}
    , {upper: 480, lower: 0, perRow: 1, rowsInit: 5, rowsAdd: 2}
]
