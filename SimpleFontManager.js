//=============================================================================
 /*:
 * @target MZ
 * @plugindesc Simple FontManager
 * @author DevWithCoffee
 *
 * @help  SimpleFontManager.js
 *
 * This plugin provides commands to change text and number fonts during gameplay.
 * Use it in the following procedure.
 * Copy any new fonts you want to the fonts folder.
 *
 * Call this function with the "Script" event command to change the font of texts
 *
 *   changeFont.setMain("MyNewFont.ttf")
 *
 *  Replace MyNewFont.ttf with the name of the font you copied to your project's fonts folder
 *
 *
 * To restore the text font to the default defined in the database call the following function.
 *   changeFont.dataMain()
 *
 *
 * Call this function with the "Script" event command to change the font of numbers
 *
 *   changeFont.setNumber("MyNewFont.ttf")
 *
 *  Replace MyNewFont.ttf with the name of the font you copied to your project's fonts folder
 *
 *
 * To restore the number font to the default defined in the database call the following function.
 *   changeFont.dataNumber()
 */
 
 
 /*:pt-br
 * @target MZ
 * @plugindesc Simple FontManager
 * @author DevWithCoffee
 *
 * @help  SimpleFontManager.js
 *
 * Este Plugin fornece comandos para mudar as fontes de texto e números durante o jogo
 * Copie as fontes que precisa para a pasta fonts do seu projeto.
 *
 * Chame está função com o comando de eventos "Script" para mudar a fonte dos textos
 *
 *   changeFont.setMain("MyNewFont.ttf")
 *
 *  Troque MyNewFont.ttf pelo nome de uma das fontes com a extensão
 *
 *
 * Para restaurar a fonte para o padrão do definido no banco de dados use o seguinte comando
 *   changeFont.dataMain()
 *
 *
 * Chame está função com o comando de eventos "Script" para mudar a fonte dos números
 *
 *   changeFont.setNumber("MyNewFont.ttf")
 *
 *  Troque MyNewFont.ttf pelo nome de uma das fontes com a extensão
 *
 *
 * Para restaurar a fonte para o padrão do definido no banco de dados use o seguinte comando
 *   changeFont.dataNumber()
 */
 
var changeFont = function(){
	throw new Error('This is not a class');
};
changeFont.setMain = function(family){
	FontManager._urls["rmmz-mainfont"]="";
	FontManager._states["rmmz-mainfont"]="";
	FontManager.load("rmmz-mainfont",family);
}
changeFont.dataMain = function(){
	FontManager._urls["rmmz-mainfont"]="";
	FontManager._states["rmmz-mainfont"]="";
	FontManager.load("rmmz-mainfont",$dataSystem.advanced.mainFontFilename);
}
changeFont.setNumber = function(family){
	FontManager._urls["rmmz-numberfont"]="";
	FontManager._states["rmmz-numberfont"]="";
	FontManager.load("rmmz-numberfont",family);
}
changeFont.dataNumber = function(){
	FontManager._urls["rmmz-numberfont"]="";
	FontManager._states["rmmz-numberfont"]="";
	FontManager.load("rmmz-numberfont",$dataSystem.advanced.numberFontFilename);
}