function updateScoreBoard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PlayerA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PlayerB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
let Rounds = 0
let Ties = 0
let PlayerB = 0
let PlayerA = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Hey shall we play Rock,Paper,Scissors")
PlayerA = 0
PlayerB = 0
Ties = 0
Rounds = 0
basic.pause(2000)
updateScoreBoard()
