export class ErrorMessage {
constructor(
public forControl: string,
public forValidator: string,
public text: string
) { }
}
export const RegistrationFormErrorMessages = [
new ErrorMessage('firstname', 'required', 'Der Vorname muss anagegeben werden'),
new ErrorMessage('lastname', 'required', 'Der Nachaname muss anagegeben werden'),
new ErrorMessage('sex', 'required', 'Das Geschlecht muss anagegeben werden'),
new ErrorMessage('birthdate', 'required', 'Das Geburtsdatum muss anagegeben werden'),
new ErrorMessage('svnr', 'required', 'Die Sozialversicherungsnummer muss anagegeben werden'),
new ErrorMessage('email', 'required', 'Eine Kontakt-Email-Adresse muss anagegeben werden'),
new ErrorMessage('tel', 'required', 'Eine Kontakt-Telefonnummer muss anagegeben werden'),
new ErrorMessage("svnr", "svnrExists", "Die Sozialversicherungsnummer existiert bereits in der Datenbank"),

];

