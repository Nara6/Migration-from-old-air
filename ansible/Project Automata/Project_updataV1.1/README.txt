We done so far:


					|Nara Task:|
----------------------------------------------------------------------------------------------------
	- Convert NFA Done well
Process: To find the DFA from NFA:

Let NFA A = {Q,X,Tran,q0,F) and DFA A’ = {A’,X’,Tran’,q0’,F’)

- Take q0’ = {q0) 
* Add transitions from the start state to the Tran’.
* If the start state has transition to multiple states for some input alphabet, then accept those multiple states as a single state in the DFA.
-  If any new state is present in Tran’,
* Add the new state in q’.
* Add transitions of state in the transition table Tran’.
* Keep repeating the third step until no new state is present in the transition table Tran’.
* Finally, the transition table T’ so obtained is the complete transition table of the required DFA.

Function For Convert NFA to DFA:

- createEmptyQueue();
- enQueue();
- deQueue();
- deleteQueue();
- copyQueue();
- checkIfExistSqSum();
- checkIfnotexistInQ();
- isFinal();

----------------------------------------------------------------------------------------------------


					|Monit Task:|
----------------------------------------------------------------------------------------------------















----------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------