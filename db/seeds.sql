INSERT INTO department (department_id, department_name)
VALUES (1, 'tech');
INSERT INTO department (department_id, department_name)
 VALUES       (2, 'sales');
 INSERT INTO department (department_id, department_name)
 VALUES       (3, 'Human resources');
 INSERT INTO department (department_id, department_name)
VALUES        (4, 'customer service');
INSERT INTO department (department_id, department_name)
VALUES        (5, 'billing');

INSERT INTO employee (first_name, last_name, role_id, manager_id);
VALUES("John", "Smith", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id);
VALUES ("Jane", "Doe", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id);
VALUES ("Albert", "Einstein", 2, null);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Tech", 175000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 250000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 100000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 300000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Rep", 120000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Rep", 25000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 600000.00, 5);