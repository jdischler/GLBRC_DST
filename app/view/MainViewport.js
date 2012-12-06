/*
 * File: app/view/MainViewport.js
 * Date: Wed Dec 05 2012 19:08:20 GMT-0600 (CST)
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'MyApp.view.InfoToolbar',
        'MyApp.view.MainToolbar',
        'MyApp.view.ViewTools',
        'MyApp.view.SelectionTools',
        'MyApp.view.TransformationTools',
        'MyApp.view.ManagementTools',
        'MyApp.view.EvaluationTools',
        'MyApp.view.GraphTools'
    ],

    autoScroll: true,
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    frame: false,
                    minHeight: 400,
                    minWidth: 800,
                    autoScroll: true,
                    layout: {
                        type: 'fit'
                    },
                    title: 'GLBRC Decision Support Tool v0.1',
                    titleAlign: 'center',
                    dockedItems: [
                        {
                            xtype: 'infotoolbar',
                            dock: 'bottom'
                        },
                        {
                            xtype: 'maintoolbar',
                            dock: 'top'
                        },
                        {
                            xtype: 'panel',
                            dock: 'left',
                            width: 300,
                            autoScroll: true,
                            layout: {
                                fill: false,
                                autoWidth: false,
                                type: 'accordion'
                            },
                            collapseDirection: 'left',
                            collapsible: true,
                            frameHeader: false,
                            manageHeight: false,
                            items: [
                                {
                                    xtype: 'viewtools'
                                },
                                {
                                    xtype: 'selectiontools',
                                    collapsed: false
                                },
                                {
                                    xtype: 'transformationtools'
                                },
                                {
                                    xtype: 'managementtools'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            dock: 'right',
                            width: 300,
                            autoScroll: true,
                            layout: {
                                fill: false,
                                autoWidth: false,
                                type: 'accordion'
                            },
                            collapseDirection: 'right',
                            collapsible: true,
                            frameHeader: false,
                            manageHeight: false,
                            items: [
                                {
                                    xtype: 'evaluationtools'
                                },
                                {
                                    xtype: 'graphtools'
                                },
                                {
                                    xtype: 'tabpanel',
                                    height: 300,
                                    width: 300,
                                    title: 'Summary Tools',
                                    titleAlign: 'center',
                                    activeTab: 0,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            height: 300,
                                            width: 300,
                                            title: 'Report'
                                        },
                                        {
                                            xtype: 'panel',
                                            height: 300,
                                            width: 300,
                                            title: 'Options'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'panel',
                            autoScroll: true,
                            title: 'Landscape Viewer',
                            titleAlign: 'center',
                            items: [
                                {
                                    xtype: 'image',
                                    height: 1800,
                                    width: 1800,
                                    src: 'http://geology.com/satellite/wisconsin-satellite-image-m.jpg'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});