export class ErrorMessage {
constructor(
public forControl: string,
public forValidator: string,
public text: string
) { }
}
export const VaceventFormErrorMessages = [
new ErrorMessage('vacdate', 'required', 'Ein Datum und die Uhrzeit müssen anagegeben werden'),
new ErrorMessage('maxPers', 'required', 'Es muss eine maximal-Anzahl von Personen angegeben werden'),
new ErrorMessage('maxPers', 'min', 'Die maximal-Anzahl muss mindestens 1 sein.'),

new ErrorMessage('location_id', 'required', 'Es muss eine Impflocation deklariert werden')
];

