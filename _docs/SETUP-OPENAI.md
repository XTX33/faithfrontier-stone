# Setting Up OpenAI API Key for Case Analysis

This guide explains how to configure the OpenAI API key for automated case analysis.

## Why Is This Optional?

The case analysis workflow is designed to work **with or without** an OpenAI API key:

- **Without API key**: Workflow runs successfully but skips AI analysis (no cost, no analysis)
- **With API key**: Workflow generates AI-powered analysis reports (costs money, generates insights)

This allows you to:
- Use the repository immediately without any external dependencies
- Add AI analysis later when you're ready and have budget
- Keep the workflow from failing when credits run out

## Getting an OpenAI API Key

1. **Create an OpenAI account**: https://platform.openai.com/signup
2. **Add billing information**: https://platform.openai.com/account/billing
3. **Generate an API key**: https://platform.openai.com/api-keys
   - Click "Create new secret key"
   - Give it a name (e.g., "FaithFrontier Case Analysis")
   - Copy the key (starts with `sk-`)
   - **Important**: Save it somewhere safe - you won't be able to see it again!

## Cost Estimates

The analysis script uses GPT-4o which costs approximately:
- **$0.10 - $0.50 per case** depending on docket size
- Most cases: ~$0.20 per analysis
- Typical monthly cost: $5-20 depending on case volume

## Setting Up Locally (Development)

For local development and testing:

1. **Create a `.env` file** in the repository root:
   ```bash
   echo "OPENAI_API_KEY=sk-your-key-here" > .env
   ```

2. **Verify it's in `.gitignore`** (it should be already):
   ```bash
   grep -q "^\.env$" .gitignore && echo "✓ .env is ignored" || echo "⚠️ Add .env to .gitignore"
   ```

3. **Test the script**:
   ```bash
   npm run analyze
   ```

## Setting Up on GitHub (CI/CD)

For automated workflows on GitHub Actions:

1. **Go to your repository on GitHub**

2. **Navigate to Settings**:
   - Click "Settings" tab
   - In the left sidebar, click "Secrets and variables"
   - Click "Actions"

3. **Add the secret**:
   - Click "New repository secret"
   - Name: `OPENAI_API_KEY`
   - Secret: Paste your OpenAI API key
   - Click "Add secret"

4. **Verify permissions** (should already be set):
   - In Settings → Actions → General
   - Under "Workflow permissions"
   - Ensure "Read and write permissions" is selected
   - Ensure "Allow GitHub Actions to create and approve pull requests" is checked

## How the Workflow Behaves

### Without API Key

```
✓ Checkout repository
✓ Setup Node.js
✓ Install dependencies
⏭️ OpenAI API Key: Not configured (analysis skipped)
✓ Workflow completes successfully
```

**Result**: No failure, no PR created, helpful message in workflow summary

### With API Key (No Changes)

```
✓ Checkout repository
✓ Setup Node.js
✓ Install dependencies
✓ OpenAI API Key: Configured
✓ Run case analysis (no new/updated cases found)
ℹ️ Changes: No new analysis generated
✓ Workflow completes successfully
```

**Result**: No failure, no PR created (nothing to commit)

### With API Key (New Analysis)

```
✓ Checkout repository
✓ Setup Node.js
✓ Install dependencies
✓ OpenAI API Key: Configured
✓ Run case analysis
✓ Generated 3 new analysis files
✓ Create Pull Request
✓ Workflow completes successfully
```

**Result**: PR created with new analysis for review

## Troubleshooting

### "API key not found" message in logs

**Cause**: The `OPENAI_API_KEY` secret is not set in GitHub  
**Solution**: Follow the "Setting Up on GitHub" steps above  
**Note**: This is not an error - the workflow will complete successfully

### "Invalid API key" error

**Cause**: The API key is incorrect or has been revoked  
**Solution**: 
1. Verify your key at https://platform.openai.com/api-keys
2. Generate a new key if needed
3. Update the secret in GitHub Settings

### "Insufficient quota" error

**Cause**: Your OpenAI account has run out of credits  
**Solution**: 
1. Add billing information at https://platform.openai.com/account/billing
2. The workflow will automatically resume when credits are available
3. Or remove the secret to disable AI analysis until ready

### Workflow fails with "GitHub Actions is not permitted to create or approve pull requests"

**Cause**: Workflow permissions are not configured correctly  
**Solution**:
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Save changes

### PR not created even though analysis ran

**Cause**: No changes were detected (analysis already exists or no new cases)  
**Solution**: This is normal behavior - PRs are only created when there's something new to review

## Security Best Practices

1. **Never commit API keys to git**
   - Always use `.env` locally
   - Always use GitHub Secrets in CI/CD
   - Check `.gitignore` includes `.env`

2. **Rotate keys periodically**
   - Generate new keys every few months
   - Delete old keys in OpenAI dashboard
   - Update secrets in GitHub

3. **Monitor usage**
   - Check OpenAI usage dashboard regularly
   - Set up usage limits in OpenAI account
   - Review unexpected spikes

4. **Restrict key permissions** (when available)
   - Use read-only keys if possible
   - Limit rate/quota for the key
   - Use separate keys for different projects

## Cost Management

### Set Usage Limits

In your OpenAI account settings:
1. Go to https://platform.openai.com/account/limits
2. Set a monthly spending limit (e.g., $20)
3. OpenAI will stop API calls when limit is reached

### Monitor Spending

1. Check usage: https://platform.openai.com/usage
2. Review API call logs
3. Track costs per case in analysis logs

### Reduce Costs

If costs are too high:
1. Run analysis less frequently (manual trigger only)
2. Analyze only high-priority cases
3. Use smaller context windows (edit prompts)
4. Switch to GPT-3.5-turbo (cheaper, lower quality)

## Disabling AI Analysis

If you want to disable AI analysis:

### Temporarily
1. Delete the `OPENAI_API_KEY` secret from GitHub
2. Workflow will skip analysis but continue to run

### Permanently
1. Delete or disable the workflow file:
   ```bash
   mv .github/workflows/case-analysis.yml .github/workflows/case-analysis.yml.disabled
   ```
2. Or remove the workflow trigger paths

## Re-enabling AI Analysis

When you're ready to enable it again:

1. Add/update the API key secret
2. Push a change to trigger the workflow
3. Verify it runs successfully
4. Review the generated PR

## Related Documentation

- [ANALYSIS-SYSTEM.md](_internal/ANALYSIS-SYSTEM.md) - Complete analysis system documentation
- [QUICKSTART-ANALYSIS.md](_internal/QUICKSTART-ANALYSIS.md) - Quick start guide
- [case-analysis.yml](.github/workflows/case-analysis.yml) - Workflow configuration

## Support

If you encounter issues not covered here:
1. Check the workflow logs in GitHub Actions
2. Review the error message in the summary
3. Verify your API key is valid in OpenAI dashboard
4. Check OpenAI status page: https://status.openai.com/
