'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async show() {
    const { ctx } = this;
    ctx.body = 'show 返回';
  }
}

module.exports = HomeController;
