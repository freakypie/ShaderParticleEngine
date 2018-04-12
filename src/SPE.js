/**
 * @typedef {Number} distribution
 * @property {Number} distributions.BOX Values will be distributed within a box.
 * @property {Number} distributions.SPHERE Values will be distributed within a sphere.
 * @property {Number} distributions.DISC Values will be distributed within a 2D disc.
 */

import Group from "./core/Group";
import {distributions, valueOverLifetimeLength} from "./core/config.js";

/**
 * Namespace for Shader Particle Engine.
 *
 * All SPE-related code sits under this namespace.
 *
 * @type {Object}
 * @namespace
 */
export default {
    Group,
    distributions,
    valueOverLifetimeLength
};
