/*
 * Copyright (c) 2015-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
'use strict';

/**
 * Defines a directive for creating label container.
 * @author Oleksii Orel
 */
export class CheLabel implements ng.IDirective {

  restrict = 'E';
  replace = true;
  transclude = false;
  templateUrl = 'components/widget/label/che-label.html';

  // scope values
  scope = {
    labelText: '@cheLabelText'
  };

}
