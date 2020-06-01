/* TABLE CREATED */
CREATE TABLE computers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    physical_build VARCHAR(50) NOT NULL,
    operating_system VARCHAR(50) NOT NULL,
    term_editor VARCHAR(50) NOT NULL,
    text_editor VARCHAR(50) 
    ram_space VARCHAR(15) NOT NULL );

        /* TABLE COLUMNS */    
            INSERT INTO computers (physical_build, operating_system, term_editor, text_editor, ram_space)

        /* TABLE CONTENT */
            VALUES ('Laptop', 'Peppermint', 'Xterm', 'Vim', '1 gig');
            VALUES ('Laptop', 'Catalina', 'Iterm2/ZSH', 'VS Code', '16 gig');            
            VALUES ('Desktop', 'Windows 10', 'cmder', 'VS Code/Sublime', '16 gig');