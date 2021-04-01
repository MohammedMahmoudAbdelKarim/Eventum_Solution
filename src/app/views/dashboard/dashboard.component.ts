import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import {
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
} from 'ng-apexcharts';

import { series } from '../data';

export type ChartOptions_2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import * as _moment from 'moment';

const moment = _moment;

const Googele_Users = [
  {
    id: 1,
    img: 'assets/images/user.jpg',
    name: 'Mohamed Ali',
    role: 'UI Designer',
    logged_date: '02/02/2020',
    duration: '01:23',
    taken_actions: 'Gmail',
  },
  {
    id: 2,
    img: 'assets/images/user-2.jpg',
    name: 'Alaa Hassan',
    role: 'Accountant',
    logged_date: '01/02/2020',
    duration: '05:23',
    taken_actions: 'Google Docs',
  },
  {
    id: 3,
    img: 'assets/images/user.jpg',
    name: 'Ahmed Ali',
    role: 'Back-End Developer',
    logged_date: '05/28/2020',
    duration: '02:02',
    taken_actions: 'Gmail',
  },
  {
    id: 4,
    img: 'assets/images/notification.jpg',
    name: 'Hassan Elyased',
    role: 'Front-End Developer',
    logged_date: '02/08/2020',
    duration: '05:20',
    taken_actions: 'Youtube',
  },
  {
    id: 5,
    img: 'assets/images/user.jpg',
    name: 'Karim Fathy',
    role: 'Flutter Developer',
    logged_date: '03/02/2020',
    duration: '00:23',
    taken_actions: 'Calender',
  },
  {
    id: 6,
    img: 'assets/images/user-2.jpg',
    name: 'Mai Ali',
    role: 'Full-Stack Developer',
    logged_date: '09/21/2020',
    duration: '09:03',
    taken_actions: 'Google Meet',
  },
  {
    id: 7,
    img: 'assets/images/notification.jpg',
    name: 'Ehab Hamdy',
    role: 'HR',
    logged_date: '01/12/2020',
    duration: '20:50',
    taken_actions: 'Google Meet',
  },
];

const Gamers = [
  {
    id: 1,
    img: 'assets/images/user.jpg',
    name: 'Mohamed Ali',
    role: 'UI Designer',
    logged_date: '04/02/2020',
    duration: '01:23',
    taken_actions: '8 Ball Pool',
  },
  {
    id: 2,
    img: 'assets/images/user-2.jpg',
    name: 'Alaa Hassan',
    role: 'Accountant',
    logged_date: '08/02/2020',
    duration: '05:23',
    taken_actions: 'PUBG Mobile',
  },
  {
    id: 3,
    img: 'assets/images/user.jpg',
    name: 'Ahmed Ali',
    role: 'Back-End Developer',
    logged_date: '01/28/2020',
    duration: '02:02',
    taken_actions: 'Among Us',
  },
  {
    id: 4,
    img: 'assets/images/notification.jpg',
    name: 'Hassan Elyased',
    role: 'Front-End Developer',
    logged_date: '06/08/2020',
    duration: '05:20',
    taken_actions: 'Call of Duty',
  },
  {
    id: 5,
    img: 'assets/images/user.jpg',
    name: 'Karim Fathy',
    role: 'Flutter Developer',
    logged_date: '08/02/2020',
    duration: '00:23',
    taken_actions: 'Candy Crush',
  },
  {
    id: 6,
    img: 'assets/images/user-2.jpg',
    name: 'Mai Ali',
    role: 'Full-Stack Developer',
    logged_date: '10/21/2020',
    duration: '09:03',
    taken_actions: 'Tennis 3D',
  },
  {
    id: 7,
    img: 'assets/images/notification.jpg',
    name: 'Ehab Hamdy',
    role: 'HR',
    logged_date: '12/12/2020',
    duration: '20:50',
    taken_actions: 'PES 2021',
  },
];

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild('chart2') chart2: ChartComponent;
  public chartOptions_2: Partial<ChartOptions_2>;

  displayedColumns: string[] = [
    'id',
    'name',
    'role',
    'logged_date',
    'duration',
    'taken_actions',
    'actions',
  ];
  dataSource = new MatTableDataSource([]);

  displayedColumns_2: string[] = [
    'id',
    'name',
    'role',
    'logged_date',
    'duration',
    'taken_actions',
    'actions',
  ];
  dataSource_2 = new MatTableDataSource([]);

  @ViewChild('TableOnePaginator', { static: true })
  tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', { static: true }) tableOneSort: MatSort;
  @ViewChild('TableTwoPaginator', { static: true })
  tableTwoPaginator: MatPaginator;
  @ViewChild('TableTwoSort', { static: true }) tableTwoSort: MatSort;

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.campaignOne = new FormGroup({
      start: new FormControl(null),
      end: new FormControl(null),
    });
    this.dataSource = new MatTableDataSource(Googele_Users);
    this.dataSource_2 = new MatTableDataSource(Gamers);
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        fontFamily: 'Poppins',
        width: 450,
        type: 'pie',
      },

      labels: [
        'Gmail',
        'Google Meet',
        'Google Chrome',
        'Youtube',
        'Google Docs',
      ],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.chartOptions_2 = {
      series: [
        {
          name: 'Application Duration',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        fontFamily: 'Poppins',
        type: 'area',
        height: 350,
        zoom: {
          enabled: true,
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#5b6e88',
          },
        },
      },
      yaxis: {
        opposite: true,
        labels: {
          style: {
            colors: '#5b6e88',
          },
        },
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }

  getDate() {
    if (this.campaignOne.controls.start.value) {
      var start = this.campaignOne.controls.start.value._i;
      start = start.month + 1 + '/' + start.date + '/' + start.year;
    }
    if (this.campaignOne.controls.end.value) {
      var end = this.campaignOne.controls.end.value._i;
      end = end.month + 1 + '/' + end.date + '/' + end.year;
    }
    let google = [];
    google = Googele_Users.filter((user) => {
      if (
        Date.parse(user.logged_date) >= Date.parse(start) &&
        Date.parse(user.logged_date) <= Date.parse(end)
      ) {
        return user;
      }
    });
    this.dataSource = new MatTableDataSource(google);
    this.dataSource.paginator = this.tableOnePaginator;
    this.dataSource.sort = this.tableOneSort;
    let games = [];
    games = Gamers.filter((game) => {
      if (
        Date.parse(game.logged_date) >= Date.parse(start) &&
        Date.parse(game.logged_date) <= Date.parse(end)
      ) {
        return game;
      }
    });
    this.dataSource_2 = new MatTableDataSource(games);
    this.dataSource.paginator = this.tableTwoPaginator;
    this.dataSource.sort = this.tableTwoSort;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.tableOnePaginator;
    this.dataSource.sort = this.tableOneSort;
    this.dataSource_2.paginator = this.tableTwoPaginator;
    this.dataSource_2.sort = this.tableTwoSort;
  }

  applyFilterOne(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterTwo(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_2.paginator) {
      this.dataSource_2.paginator.firstPage();
    }
  }
}
