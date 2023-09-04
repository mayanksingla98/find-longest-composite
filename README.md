# find-longest-composite

Step To Execute:

1. Open Terminal
2. Run command 'node index.js'

NOTE : sample file can be changed at line 43

Approch Taken: Brute Force

Overview of Program :

1. Get all words in a array [A].
2. Loop on array [A] and compare remaining words from the same array [B].
3. Remove matched word from the original word and push it in a array for other possible combinations [C].
4. At the same time compare words in array [C] with current word in the loop.
5. Break the loop [B] as soon as one word completes its all matches.
