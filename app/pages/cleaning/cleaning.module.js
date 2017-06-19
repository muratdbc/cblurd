/**
 * @author mgocmen
 * created on 06.10.2017
 */
(function () {
  'use strict';

  angular.module('CC.pages.cleaning', ['ngFileUpload'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('cleaning', {
          url: '/cleaning',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Cleanings',
          sidebarMeta: {
            icon: 'ion-waterdrop',
            order: 250,
          },
        })
        .state('cleaning.new', {
          url: '/cleaning/new',
          templateUrl: 'app/pages/cleaning/new/new.html',
          title: 'Add Cleaning',
          controller: 'AddCleaningCtrl',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('cleaning.list', {
          url: '/cleanings',
          templateUrl: 'app/pages/cleaning/new/list.html',
          title: 'List View',
          controller: 'ListCleaningCtrl',
          sidebarMeta: {
            order: 100,
          },
        });
        // .state('form.wizard',
        // {
        //   url: '/wizard',
        //   templateUrl: 'app/pages/form/wizard/wizard.html',
        //   controller: 'WizardCtrl',
        //   controllerAs: 'vm',
        //   title: 'Form Wizard',
        //   sidebarMeta: {
        //     order: 200,
        //   },
        // })
  }
})();
