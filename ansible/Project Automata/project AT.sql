/*DATABASE FOR AUTOMATA*/

CREATE DATABASE Automata;
USE Automata;

CREATE TABLE FA(
	id INT PRIMARY KEY AUTO_INCREMENT ,
	fa_type ENUM('NFA','DFA'),
	description TEXT
);
CREATE TABLE alphabet(
	id INT PRIMARY KEY AUTO_INCREMENT ,
	fa_id INT,
	symbol VARCHAR(5) NOT NULL ,
	FOREIGN KEY (fa_id) REFERENCES fa(id) ON DELETE CASCADE 
);
CREATE TABLE states(
	id	INT PRIMARY KEY AUTO_INCREMENT,
	fa_id	INT,
	state VARCHAR(5) NOT NULL,
	start_state	INT NOT NULL,	#only 0 & 1 where 1 is true & 0 is not
	final_state INT NOT NULL,	#only 0 & 1 where 1 is true & 0 is not
	FOREIGN KEY (fa_id) REFERENCES fa(id) ON DELETE CASCADE
);
CREATE TABLE transition(
	state_id	INT ,
	symbol_id INT ,
	next_state_id int,
	PRIMARY KEY (state_id , symbol_id, next_state_id),
	FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE,
	FOREIGN KEY (symbol_id) REFERENCES alphabet(id) ON DELETE CASCADE,
	FOREIGN KEY (next_state_id) REFERENCES states(id) ON DELETE CASCADE
);
#L = {w|w starts with ab and ends in ab}, X = {a,b}
# {w|w contains abb},  =X {a, b}
INSERT INTO fa (fa_type, description) VALUES 
	('DFA', 'L={ab^n| n>=0 }, X={a,b}'), #fa 1
	('DFA', 'L={W|W is start with a}, X={a,b}'), #fa 2
	('NFA','L={W|W begin with ab and end in ba}, X={a,b}'), #fa 3
	('NFA','L={(10)^n|n>=0}'); #fa4

INSERT INTO alphabet (fa_id, symbol) VALUES 
	(1,'a'), #for fa 1
	(1,'b'),
	(2,'a'),#for fa 2
	(2,'b'),
	(3,'a'),#for fa 3
	(3,'b'),
	(4,'a'), #for fa 4
	(4,'b'),
    (4,'-');

INSERT INTO states (fa_id, state, start_state ,final_state) VALUES 
	(1, 'q0', 1, 0), #for fa 1
	(1, 'q1', 0, 1),
	(1, 'q2', 0, 0),
	(2, 'q0', 1, 0), #for fa 2
	(2, 'q1', 0, 1),
	(2, 'q2', 0, 0),
	(3, 'q0', 1, 0), #for fa 3
	(3, 'q1', 0, 0),
	(3, 'q2', 0, 0),
	(3, 'q3', 0, 0),
	(3, 'q4', 0, 1),
    (4, 'q0', 1, 0), #for fa 4
	(4, 'q1', 0, 0),
	(4, 'q2', 0, 1);

INSERT INTO transition (state_id, symbol_id, next_state_id) VALUES 
	(1, 1, 2),	#for fa 1
	(1, 2, 1),
	(2, 1, 3),
	(2, 2, 1),
	(3, 1, 3),
	(3, 2, 1),
	(4, 3, 5),  #for fa 2
	(4, 4, 6),
	(5, 3, 5),
	(5, 4, 5),
	(6, 3, 6),
	(6, 4, 6),
    (7, 5, 8),	 #for fa 3
	(8, 6, 9),
	(8, 6, 10),
	(9, 5, 9),
	(9, 6, 9),
	(9, 6, 10),
	(10, 5, 11),
    (12, 8, 13),	#for fa 4
	(12, 9, 14),
	(13, 7, 14),
	(14, 8, 13);

INSERT INTO fa (fa_type, description) VALUES 
	('NFA','L={W|W of all over {0,1} that end with 0110, 010, 00}');
INSERT INTO alphabet (fa_id, symbol) VALUES
	(5,'0'), #for fa 5
	(5,'1'),
	(5,'-');
INSERT INTO states (fa_id, state, start_state ,final_state) VALUES
	(5, 'q0', 1, 0), #for fa 5
	(5, 'q1', 0, 0),
	(5, 'q2', 0, 0),
	(5, 'q3', 0, 0),
	(5, 'q4', 0, 1);
INSERT INTO transition (state_id, symbol_id, next_state_id) VALUES
	(15, 10, 15),	#for fa 5
	(15, 11, 15),
	(15, 10, 16),
	(16, 11, 17),
	(16, 12, 17),
	(17, 11, 18),
	(17, 12, 18),
	(18, 10, 19);
INSERT INTO fa (fa_type, description) VALUES 
	('DFA','L={(a|b)^n, n is odd}');
INSERT INTO alphabet (fa_id, symbol) VALUES
	(6,'a'), #for fa 6
	(6,'b');
INSERT INTO states (fa_id, state, start_state ,final_state) VALUES
	(6, 'q0', 1, 0), #for fa 6
	(6, 'q1', 0, 1),
	(6, 'q2', 0, 0),
	(6, 'q3', 0, 1),
	(6, 'q4', 0, 0);
INSERT INTO transition (state_id, symbol_id, next_state_id) VALUES
  (20, 13, 21),  #for fa 6
  (20, 14, 21),
  (21, 13, 22),
  (21, 14, 22),
  (22, 13, 23),
  (22, 14, 23),
  (23, 13, 22),
  (23, 14, 22),
  (24, 13, 23),
  (24, 14, 22);

-- DELETE FROM fa WHERE id=6;





