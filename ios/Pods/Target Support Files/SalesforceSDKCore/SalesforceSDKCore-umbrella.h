#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "SFSDKAILTNPublisher.h"
#import "SFSDKAnalyticsPublisher.h"
#import "SFSDKEventBuilderHelper.h"
#import "SFSDKSalesforceAnalyticsManager.h"
#import "NSArray+SFAdditions.h"
#import "NSData+SFSDKUtils.h"
#import "NSDictionary+SFAdditions.h"
#import "NSObject+SFBlocks.h"
#import "NSURL+SFAdditions.h"
#import "SFApplication.h"
#import "SFCrypto.h"
#import "SFInactivityTimerCenter.h"
#import "SFSDKAppConfig.h"
#import "SFSDKAppFeatureMarkers.h"
#import "SFSDKWebViewStateManager.h"
#import "SFUserActivityMonitor.h"
#import "SalesforceSDKManager.h"
#import "UIDevice+SFHardware.h"
#import "UIScreen+SFAdditions.h"
#import "SFSDKLoginFlowSelectionView.h"
#import "SFSDKUITableViewCell.h"
#import "SFSDKUserSelectionNavViewController.h"
#import "SFSDKUserSelectionTableViewController.h"
#import "SFSDKUserSelectionView.h"
#import "SFIdentityCoordinator.h"
#import "SFIdentityData.h"
#import "SFInstrumentation.h"
#import "SFMethodInterceptor.h"
#import "SFSDKInstrumentationHelper.h"
#import "SFSDKLoginHost.h"
#import "SFSDKLoginHostDelegate.h"
#import "SFSDKLoginHostListViewController.h"
#import "SFSDKLoginHostStorage.h"
#import "SFLoginViewController.h"
#import "SFSDKLoginViewControllerConfig.h"
#import "SFOAuthCoordinator.h"
#import "SFOAuthCredentials.h"
#import "SFOAuthInfo.h"
#import "SFOAuthKeychainCredentials.h"
#import "SFOAuthOrgAuthConfiguration.h"
#import "SFOAuthSessionRefresher.h"
#import "SFSDKAuthViewHandler.h"
#import "SFSDKAppDelegate.h"
#import "SFPushNotificationManager.h"
#import "SFSDKPushNotificationDecryption.h"
#import "SFSDKPushNotificationError.h"
#import "SFSDKPushNotificationFieldsConstants.h"
#import "SFNetwork.h"
#import "SFRestAPI+Blocks.h"
#import "SFRestAPI+Files.h"
#import "SFRestAPI+QueryBuilder.h"
#import "SFRestAPI.h"
#import "SFRestRequest.h"
#import "SFSDKBatchRequest.h"
#import "SFSDKBatchResponse.h"
#import "SFSDKCompositeRequest.h"
#import "SFSDKCompositeResponse.h"
#import "SFSObjectTree.h"
#import "SFAppLockViewControllerTypes.h"
#import "SFSDKAppLockViewConfig.h"
#import "SFSDKAppLockViewController.h"
#import "SFAuthErrorHandlerList.h"
#import "SFCryptChunks.h"
#import "SFDecryptStream.h"
#import "SFDefaultUserManagementDetailViewController.h"
#import "SFDefaultUserManagementListViewController.h"
#import "SFDefaultUserManagementViewController.h"
#import "SFEncryptStream.h"
#import "SFEncryptionKey.h"
#import "SFGeneratedKeyStore.h"
#import "SFKeyStore.h"
#import "SFKeyStoreKey.h"
#import "SFKeyStoreManager.h"
#import "SFPBKDF2PasscodeProvider.h"
#import "SFPBKDFData.h"
#import "SFPasscodeKeyStore.h"
#import "SFPasscodeManager+Internal.h"
#import "SFPasscodeManager.h"
#import "SFPasscodeProviderManager.h"
#import "SFSDKCryptoUtils.h"
#import "SFSHA256PasscodeProvider.h"
#import "SFSecureEncryptionKey.h"
#import "SFSecurityLockout+Internal.h"
#import "SFSecurityLockout.h"
#import "SFUserAccount.h"
#import "SFUserAccountConstants.h"
#import "SFUserAccountIdentity.h"
#import "SFUserAccountManager.h"
#import "SFSDKAsyncProcessListener.h"
#import "SFSDKTestCredentialsData.h"
#import "SFSDKTestRequestListener.h"
#import "TestSetupUtils.h"
#import "NSURL+SFStringUtils.h"
#import "SFApplicationHelper.h"
#import "SFDirectoryManager.h"
#import "SFManagedPreferences.h"
#import "SFPreferences.h"
#import "SFSDKAuthConfigUtil.h"
#import "SFSDKAuthHelper.h"
#import "SFSDKCoreLogger.h"
#import "SFSDKOAuth2.h"
#import "SFSDKResourceUtils.h"
#import "SFSDKSoqlBuilder.h"
#import "SFSDKSoslBuilder.h"
#import "SFSDKSoslReturningBuilder.h"
#import "SFSDKViewControllerConfig.h"
#import "SFSDKWebUtils.h"
#import "SalesforceSDKCoreDefines.h"
#import "UIColor+SFColors.h"
#import "SFSDKAlertMessage.h"
#import "SFSDKAlertMessageBuilder.h"
#import "SFSDKDevInfoViewController.h"
#import "SFSDKNavigationController.h"
#import "SFSDKViewController.h"
#import "SFSDKWindowContainer.h"
#import "SFSDKWindowManager.h"
#import "SalesforceSDKCore.h"
#import "SalesforceSDKConstants.h"
#import "NSData+SFAdditions.h"
#import "NSString+SFAdditions.h"
#import "NSNotificationCenter+SFAdditions.h"
#import "SFKeychainItemWrapper.h"

FOUNDATION_EXPORT double SalesforceSDKCoreVersionNumber;
FOUNDATION_EXPORT const unsigned char SalesforceSDKCoreVersionString[];

