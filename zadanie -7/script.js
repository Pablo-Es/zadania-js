var offices = [
    { id: "GD", name: "Gdansk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

var workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];


const company = {};
    company.offices = offices.map(office => {
            return {
                id: office.id,
                name: office.name,
                headquarter: office.headquarter || false,
                workers: workers.filter((worker) => (worker.office === office.id))
            }
        }
    );

/*Firma X posiada trzy aktualnie biura zlokalizowane w Gdansku, Gliwicach i Koszalinie a w niedalekiej przyszlosci planuje otworzyc nowe biuro w Poznaniu.
Wymagania aplikacji: Na podstawie dostarczonych danych, prosze stworzyc obiekt Firma.

Firma powinna posiadac:
- liste Biur (tablice)

Natomiast Kazde biuro powinno posiadac liste Pracownik�w, id, name, oraz informacje czy jest gl�wna siedziba.
Kazdy pracownik ma propercje office, kt�ra pozwala nam rozpoznac, do kt�rego biura nalezy (id w offices).

Do stworzenia struktury firmy uzyj przykladowych danych z zmiennych offices i workers.
Uzywajac obiektu �Firma� wykonaj nastepujace operacje (w kolejnosci):

1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracownik�w, srednia pensja), */
const getInfoAboutOffice = officeName => company.offices.map(office => {
        return {
            location: office.name,
            numberOfWorkers: office.workers.length,
            averageSalary: (office.workers.reduce((acc, next) => acc + next.salary, 0) / office.workers.length).toFixed(2)
        }
    })
    .find(locat => locat.location === officeName);


console.log(getInfoAboutOffice('Gliwice'));
// 2) Dodaj nowe biuro (w Poznaniu),

company.offices.push({id: 'PO', name: 'Poznan', headquarter: false, workers: []});

// 3) Dodaj nowego pracownika do biura w Poznaniu: { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 }

const newWorker = {id: 16, name: "Olek", type: "M", office: "PO", salary: 500};
const officeInPoznan = company.offices.find((office) => office.id === 'PO');

officeInPoznan.workers.push(newWorker);


// 4) Wyswietl, informacje o biurze w Poznaniu

console.log(officeInPoznan);

// 5) Wyswietl srednia pensje w calej firmie,
const allWorkers = company.offices.reduce((acc, next) => acc.concat(next.workers),[]);
const averageSalaryInCompany = (allWorkers.reduce((acc, next) => acc + next.salary, 0) / allWorkers.length).toFixed(2);

console.log(averageSalaryInCompany);

// 6) Wyswietl najlepiej oplacanego pracownika w poszczeg�lnych biurach,
const getMaxSalary = salary => Math.max(...salary);

const maxSalaryWorkersByOffice = company.offices.map(({name, workers}) => {
    let salaryWorkersByOffice = workers.map(worker => worker.salary);
   return  {
           officeName: name,
           workers: workers.filter((worker) => (worker.salary === getMaxSalary(salaryWorkersByOffice)))
   }
});
console.log(maxSalaryWorkersByOffice);


// 7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.

const salaryWorkers = allWorkers.map(worker => worker.salary);
// const maxSalary = (Math.max(...getSalaryWorkers));
const mostRichWorker = allWorkers.find(office => office.salary === getMaxSalary(salaryWorkers));
console.log(mostRichWorker);
/* Uzyj konsoli do wyswietlenia danych. (wolaj w console.log funkcje, kt�re zwracaja zadane wartosci, np. najlepiej oplacanego pracowinika)
Uzywaj skladni z ES6 lub ES5 (badz konsekwentny) */


