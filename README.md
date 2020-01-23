# _Pig Latin Translator_

#### _Specification writing practice for Epicodus_ _22 January 2020_

#### By _**Brandan Sayarath and Todd Walraven**_

## Description

_This webpage includes a form to obtain an input of a sentence or word. jQuery is used to obtain the value of the user's input and translate it into Pig Latin. 

## Specs

1. _The program does nothing to non-alphabetical characters._
    *   _Example Input: 3_
    *   _Example Output: 3_

3. _The program adds “way” to the end of words beginning with  a vowel_
    *	_Example Input: eat_
    *   _Example Output: eatway_ 

4. For a word beginning with a single consonant, the program moves the the consonant to the end and adds “ay”
    *	_Example Input: dog_
    *   _Example Output: ogday_

5. For words beginning with y, treat y as a consonant
    *	_Example Input: yellow_
    *	_Example Output: ellowyay_

6. The program takes words beggining with consecutive consonants and moves the first consecutive consonants to the end and then adds “ay”
    *	_Example Input: school_
    *	_Example Output: oolschay_

7. If the first consonants are "qu", move the “qu” to the end and add “ay”
    *	_Example Input: quiet_
    *	_Example Output: ietquay_

8. If the word includes “qu” and there are consonant in front of it, move all the characters before and including “qu” to the end and add “ay”
    *	_Example Input: squeal_
    *   _Example Output: ealsquay_

9. Apply all rules to multiple word sentences
    *	_Example Input: _Pig Latin Translator_
    *   _Example Output: igPay atinLay anslatorTra_


## Setup/Installation Requirements

* _First, clone this repository by entering, in the terminal, the prompt "git clone" followed by the URL to this repository._
* _Use Terminal to navigate to the correct directory (using the prompt "cd {repository-name}")._
* _Open in Visual Studio Code using the terminal prompt "code ."_
* _Open index.html in a browser of your choice._

## Technologies Used

_Git, HTML, CSS, JavaScript (jQuery)_

### License

Copyright (c) 2020 **_Brandan Sayarath, Todd Walraven*_**
