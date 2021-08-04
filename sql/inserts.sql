INSERT INTO public.address VALUES (DEFAULT, 'Calle 97', 'No. 5-68', 'Maracaibo', 'Zulia', '4001');
INSERT INTO public.address VALUES (DEFAULT, 'Av. Principal de la Urbina', 'Edificio Antiguo fortín', 'Caracas', 'Dtto. Capital', '1073');
INSERT INTO public.address VALUES (DEFAULT, 'Plaza Francia', 'Hotel Caracas Palace', 'Caracas', 'Dtto. Capital', '1060');
INSERT INTO public.address VALUES (DEFAULT, 'Urb. La Providencia', NULL, 'Turmero', 'Aragua', '2115');
INSERT INTO public.address VALUES (DEFAULT, 'Av B, Quinta Monteria', 'Urbanizacion El Pinar', 'Caracas', 'Dtto Capital', '1020');
INSERT INTO public.address VALUES (DEFAULT, 'Calle 78', 'Dr Portillo', 'Maracaibo', 'Zulia', '4001');
INSERT INTO public.address VALUES (DEFAULT, 'Urbanizacion La Granja', NULL, 'San Juan de los Morros', 'Guárico', '2301');
INSERT INTO public.address VALUES (DEFAULT, 'Calle Toledo', 'Casa Miguel', 'Caracas', 'Dtto Capital', '1061');
INSERT INTO public.address VALUES (DEFAULT, 'Av. Libertador', 'Edif. FERTEC', 'Caracas', 'Dtto Capital', '1060');
INSERT INTO public.address VALUES (DEFAULT, 'Calle Real Simón Rodríguez', 'Maripérez', 'Caracas', 'Dtto Capital', '1050');
INSERT INTO public.address VALUES (DEFAULT, 'Avenida Jóvito', 'Villalba Edificio Lidotel Margarita', 'Pampatar', 'Nueva Esparta', '6316');
INSERT INTO public.address VALUES (DEFAULT, 'Calle la Manguera', 'Callejón Blanco', 'Caracas', 'Dtto Capital', '1060');
INSERT INTO public.address VALUES (DEFAULT, 'Calle 28', NULL, 'Barquisimeto', 'Lara', '3001');
INSERT INTO public.address VALUES (DEFAULT, 'Calle Cedeño', NULL, 'Barinas', 'Barinas', '5201');
INSERT INTO public.address VALUES (DEFAULT, 'Calle Real', NULL, 'Caracas', 'Dtto Capital', '1010');
INSERT INTO public.address VALUES (DEFAULT, 'Av. Los Mangos', NULL, 'Caracas', 'Dtto Capital', '1050');

INSERT INTO public.employer VALUES (DEFAULT, 'Scholics University', 'Have approved high school', 0, 13);
INSERT INTO public.employer VALUES (DEFAULT, 'Jetroom', 'Have verified hotel related skills', 0, 14);
INSERT INTO public.employer VALUES (DEFAULT, 'Fixetics', 'Be 16 years old or more', 0, 15);
INSERT INTO public.employer VALUES (DEFAULT, 'QuikFoods', 'Must have prior experience cooking', 0, 16);

INSERT INTO public.contact_information VALUES (DEFAULT, 'Álvaro Cruz', 'Programming Professor', '04128172400', 'alvaro.cruz@scholicsu.com', 1);
INSERT INTO public.contact_information VALUES (DEFAULT, 'Fatima Giménez', 'Hotel Manager', '04267089703', 'fatima.gimenez@jetroom.com', 2);
INSERT INTO public.contact_information VALUES (DEFAULT, 'Jorge Nieto', 'Store Manager', '04246415673', 'jorge.nieto@fixetics.com', 3);
INSERT INTO public.contact_information VALUES (DEFAULT, 'Esther Saez', 'Restaurant Owner', '04144450064', 'esther.saez@quikfoods.com', 4);

INSERT INTO public.employee VALUES (DEFAULT, 'Alba', 'Lucia', 'Arias', '04166609508', '1984-01-12', '33909141', 0, NULL, 0, 1);
INSERT INTO public.employee VALUES (DEFAULT, 'Luis', 'Alfonso', 'Suarez', '04124631165', '1958-04-13', '79134337', 1, NULL, 1, 2);
INSERT INTO public.employee VALUES (DEFAULT, 'Maria', 'Lumena', 'Molina', '04146883317', '1983-09-27', '52005992', 2, NULL, 2, 3);
INSERT INTO public.employee VALUES (DEFAULT, 'Emilia', 'Mariana', 'Hidalgo', '04245230541', '1962-12-28', '86240821', 3, NULL, 3, 4);
INSERT INTO public.employee VALUES (DEFAULT, 'Iker', 'Esteban', 'Mendez', '04168945844', '1978-05-10', '69592196', 4, NULL, 4, 5);
INSERT INTO public.employee VALUES (DEFAULT, 'Alfonso', 'Ignacio', 'Rojas', '04129485631', '1991-07-31', '33878838', 5, NULL, 5, 6);
INSERT INTO public.employee VALUES (DEFAULT, 'Mar', 'Andrea', 'Ortiz', '04141884875', '1987-08-25', '73221412', 6, NULL, 2, 7);
INSERT INTO public.employee VALUES (DEFAULT, 'Raquel', 'Milena', 'Cabrera', '04242437715', '1969-02-28', '52785879', 7, NULL, 2, 8);
INSERT INTO public.employee VALUES (DEFAULT, 'Jordi', 'Roberto', 'Nuñez', '04166455894', '1985-02-14', '96065271', 8, NULL, 0, 9);
INSERT INTO public.employee VALUES (DEFAULT, 'Maria', 'Julia', 'Herrero', '04121678572', '1997-10-02', '4171623', 9, NULL, 0, 10);
INSERT INTO public.employee VALUES (DEFAULT, 'Adriana', 'Mercedes', 'Cano', '04145104595', '1999-08-14', '33860836', 10, NULL, 1, 11);
INSERT INTO public.employee VALUES (DEFAULT, 'Fernando', 'Adrian', 'Gonzalez', '04242869455', '1989-05-27', '26211654', 3, NULL, 2, 12);

INSERT INTO public."references" VALUES (DEFAULT, 'Joaquin Ramos', 'Shoemaker', 'Kicksmith', '04245152495', 'joaquin.ramos@kicksmith.com', 1);
INSERT INTO public."references" VALUES (DEFAULT, 'Alba Marin', 'Petroleum Technician', 'Keengine', '04125667842', 'alba.marin@keengine.com', 2);
INSERT INTO public."references" VALUES (DEFAULT, 'David Sanchez', 'VP Advertising', 'Cafe&Tents', '04269514734', 'david.sanchez@cafeandtents.com', 3);
INSERT INTO public."references" VALUES (DEFAULT, 'Guillermo Márquez', 'Car Alarm Installer', 'Repair.ly', '04146028791', 'guillermo.marquez@repairly.com', 4);
INSERT INTO public."references" VALUES (DEFAULT, 'Cesar Gimenez', 'Janitor', 'Cleanoholic', '04264041446', 'cesar.gimenez@cleanoholic.com', 5);
INSERT INTO public."references" VALUES (DEFAULT, 'Sandra Álvarez', 'Cafeteria Manager', 'Cafe&Tents', '04128768094', 'sandra.alvarez@cafeandtents.com', 6);
INSERT INTO public."references" VALUES (DEFAULT, 'Encarnación Campos', 'Emergency Management System Director', 'LocalRail', '04247050631', 'encarnacion.campos@localrail.com', 7);
INSERT INTO public."references" VALUES (DEFAULT, 'German Carrasco', 'Dining Room Host', 'Posh Patisserie', '04129612109', 'german.carrasco@patisserie.com', 8);
INSERT INTO public."references" VALUES (DEFAULT, 'Jordi Montero', 'Facilities Engineer', 'Laundrix', '04262876762', 'jordi.montero@laundrix.com', 9);
INSERT INTO public."references" VALUES (DEFAULT, 'Ana Álvarez', 'Security Guard Supervisor', 'LocalRail', '04140770665', 'ana.alvarez@localrail.com', 10);
INSERT INTO public."references" VALUES (DEFAULT, 'Adolfo Navarro', 'Publicist', 'Laundrix', '04245614834', 'adolfo.navarro@laundrix.com', 11);
INSERT INTO public."references" VALUES (DEFAULT, 'Ernesto Santos', 'Cafeteria Cook', 'Skyway Schools', '04126084456', 'ernesto.santos@skyway.com', 12);

INSERT INTO public.work_experience VALUES (DEFAULT 'Janitor', 'UCV Informatic School', 0, 1);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Plumber', 'General Plumbers CA', 1, 1);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Mainframe Supervisor', 'Some Software CA', 1, 2);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Cook', 'Oompa Resort CA', 2, 3);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Mechanical Drafter', 'Repair.ly', 1, 4);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Hotel Concierge', 'Cleanoholic', 0, 5);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Dining Car Steward', 'Cafe&Tents', 0, 6);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Railroad Car Repair Supervisor', 'LocalRail', 1, 7);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Restaurant Server', 'Posh Patisserie', 2, 8);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Launderer', 'Laundrix', 3, 9);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Railroad Inspector', 'LocalRail', 1, 10);
INSERT INTO public.work_experience VALUES (DEFAULT, 'Laundry Sorter', 'Laundrix', 3, 11);
INSERT INTO public.work_experience VALUES (DEFAULT, 'School Cook', 'Skyway School', 2, 12);

INSERT INTO public.staff_member VALUES (DEFAULT, 'Jhonny', 'James', 'Bravo', 'Users Administrator');
INSERT INTO public.staff_member VALUES (DEFAULT, 'William', 'Arthur', 'Wallace', 'Jobs Interviewer');
INSERT INTO public.staff_member VALUES (DEFAULT, 'Benjamin', 'Dorian', 'Franklin', 'Applications Reviewer');
INSERT INTO public.staff_member VALUES (DEFAULT, 'Lucas', 'John', 'Green', 'System Administrator');

INSERT INTO public.job_offer VALUES (DEFAULT, 'Clean PC labs', '2021-08-15', 'You need to be good at cleaning', 3600, 19.5, 0, 1, 1, NULL);
INSERT INTO public.job_offer VALUES (DEFAULT, 'Cook for a party', '2021-09-15', 'Know how to cook burgers', 8000, 10, 0, 2, 2, NULL);
INSERT INTO public.job_offer VALUES (DEFAULT, 'Be a software teacher', '2021-08-09', 'You have to know clean architecture', 56000, 5, 0, 1, 1, NULL);
INSERT INTO public.job_offer VALUES (DEFAULT, 'Fix a dishwasher', '2021-08-02', 'Fix it in less than 1 hour', 3600, 7, 2, 1, 1, NULL);

INSERT INTO public.jobs_schedule VALUES (1, '2021-08-15 08:00:00', '2021-08-15 16:00:00', 1);
INSERT INTO public.jobs_schedule VALUES (2, '2021-08-17 08:00:00', '2021-08-17 16:00:00', 1);
INSERT INTO public.jobs_schedule VALUES (3, '2021-09-15 00:00:01', '2022-09-14 23:59:59', 2);
INSERT INTO public.jobs_schedule VALUES (4, '2021-08-09 08:00:00', '2021-08-09 10:00:00', 3);
INSERT INTO public.jobs_schedule VALUES (5, '2021-08-16 08:00:00', '2021-08-16 16:00:00', 3);

INSERT INTO public.skill VALUES (DEFAULT, 'Clean PC laboratories', 0);
INSERT INTO public.skill VALUES (DEFAULT, 'Install and repair pipes of water', 1);
INSERT INTO public.skill VALUES (DEFAULT, 'Repair computers', 1);
INSERT INTO public.skill VALUES (DEFAULT, 'Cook gourmet plates', 2);
INSERT INTO public.skill VALUES (DEFAULT, 'Design mechanical equipment', 1);
INSERT INTO public.skill VALUES (DEFAULT, 'Assist hotel guests', 0);
INSERT INTO public.skill VALUES (DEFAULT, 'Clean restaurant tables', 0);
INSERT INTO public.skill VALUES (DEFAULT, 'Repair railroad cars', 1);
INSERT INTO public.skill VALUES (DEFAULT, 'Serve plates in a restaurant', 2);
INSERT INTO public.skill VALUES (DEFAULT, 'Wash delicate clothes', 3);
INSERT INTO public.skill VALUES (DEFAULT, 'Detect damage in railroad trails', 1);
INSERT INTO public.skill VALUES (DEFAULT, 'Operate washing machines', 3);
INSERT INTO public.skill VALUES (DEFAULT, 'Cook healthy food for kids and teenagers', 2);

INSERT INTO public.skill_employee VALUES (1, 1);
INSERT INTO public.skill_employee VALUES (2, 1);
INSERT INTO public.skill_employee VALUES (3, 2);
INSERT INTO public.skill_employee VALUES (4, 3);
INSERT INTO public.skill_employee VALUES (5, 4);
INSERT INTO public.skill_employee VALUES (6, 5);
INSERT INTO public.skill_employee VALUES (7, 6);
INSERT INTO public.skill_employee VALUES (8, 7);
INSERT INTO public.skill_employee VALUES (9, 8);
INSERT INTO public.skill_employee VALUES (10, 9);
INSERT INTO public.skill_employee VALUES (11, 10);
INSERT INTO public.skill_employee VALUES (12, 11);
INSERT INTO public.skill_employee VALUES (13, 12);

INSERT INTO public.skill_employer VALUES (1, 1);
INSERT INTO public.skill_employer VALUES (2, 2);
INSERT INTO public.skill_employer VALUES (3, 1);
INSERT INTO public.skill_employer VALUES (5, 3);
INSERT INTO public.skill_employer VALUES (6, 3);
INSERT INTO public.skill_employer VALUES (2, 4);
INSERT INTO public.skill_employer VALUES (7, 4);
INSERT INTO public.skill_employer VALUES (8, 4);

INSERT INTO public."skill_jobOffer" VALUES (1, 1);
INSERT INTO public."skill_jobOffer" VALUES (2, 2);
INSERT INTO public."skill_jobOffer" VALUES (4, 1);

SELECT * FROM ADDRESS;
SELECT * FROM CONTACT_INFORMATION;
SELECT * FROM EMPLOYEE;
SELECT * FROM EMPLOYER;
SELECT * FROM JOB_OFFER;
SELECT * FROM "references";
SELECT * FROM SKILL;
SELECT * FROM WORK_EXPERIENCE;