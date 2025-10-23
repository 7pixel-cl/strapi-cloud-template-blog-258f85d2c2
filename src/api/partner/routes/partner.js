'use strict';

/**
 * partner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// @ts-ignore - Strapi type inference issue
module.exports = createCoreRouter('api::partner.partner');
