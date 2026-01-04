"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const privacy_class_interface_1 = require("../privacy/privacy.class.interface");
class User {
    constructor(userID, displayName, photoURL, privacy, description) {
        this.privacy = privacy_class_interface_1.Privacy.Private;
        this.acceptedDataPolicy = false;
        this.acceptedPrivacyPolicy = false;
        this.acceptedTrackingPolicy = false;
        this.acceptedDiagnosticsPolicy = false;
        this.uid = userID;
        if (photoURL) {
            this.photoURL = photoURL;
        }
        if (displayName) {
            this.displayName = displayName;
        }
        if (privacy) {
            this.privacy = privacy;
        }
        if (description) {
            this.description = description;
        }
    }
    toJSON() {
        return {
            uid: this.uid,
            privacy: this.privacy,
            acceptedPrivacyPolicy: this.acceptedPrivacyPolicy,
            acceptedDataPolicy: this.acceptedDataPolicy,
            acceptedTrackingPolicy: this.acceptedTrackingPolicy,
            acceptedDiagnosticsPolicy: this.acceptedDiagnosticsPolicy,
            brandText: this.brandText || null,
            photoURL: this.photoURL || null,
            displayName: this.displayName || null,
            description: this.description || null,
            settings: this.settings ? this.settings : null
        };
    }
}
exports.User = User;
