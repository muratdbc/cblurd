/**
 * @author mgocmen
 * created on 06.10.2017
 */
(function () {
  'use strict';

  angular.module('CC.pages.cleaning', [])
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
          sidebarMeta: {
            order: 0,
          },
        });
        // .state('cleaning.layouts', {
        //   url: '/cleanings',
        //   templateUrl: 'app/pages/form/layouts/layouts.html',
        //   title: 'Form Layouts',
        //   sidebarMeta: {
        //     order: 100,
        //   },
        // })
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
